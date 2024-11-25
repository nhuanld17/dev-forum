import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "src/components/ui/toast";
import { apiClient } from "src/lib/api-client";
import { ResponseMessage, ResponseUser } from "src/types/common";
import { z } from "zod";

export const loginInputSchema = z.object({
  email: z.string().min(1, "Required").email("Invalid email"),
  password: z.string().min(6, "Required"),
});

const postLoginData = (data: z.infer<typeof loginInputSchema>) => {
  return apiClient.post("/auth/login", data);
};

export const useLogin = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();

  return useMutation({
    mutationFn: postLoginData,
    onSuccess: (data) => {
      const item = data.data.data as ResponseUser;
      addToast({
        title: "Login success",
        message: "You have been logged in",
        type: "success",
      });
      localStorage.setItem("token", item.access_token);
      localStorage.setItem("roleName", item.userLogin.roleName);
      if (item.userLogin.roleName === "ROLE_COMPANY") {
        navigate("/employer");
      } else {
        navigate("/candidate");
      }
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as ResponseMessage;

      addToast({
        title: "Something went wrong",
        message: data?.message || "An unknown error occurred",
        type: "error",
      });
    },
  });
};
