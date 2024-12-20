import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "src/components/ui";
import { apiClient } from "src/lib/api-client";
import { ResponseMessage } from "src/types";
import { z } from "zod";


export const CompanyPassword = z.object({
  currentPassword: z.string().min(6, "Password must be at least 6 characters"),
  newPassword: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
});

export const postUpdatePassword = (data : z.infer<typeof CompanyPassword>) => { 
  return apiClient.post("/company/change-password", data);
}

export const useUpdatePassword = () => {

  const { addToast } = useToast();

  return useMutation({
    mutationFn: postUpdatePassword,
    onSuccess: (data) => {
      console.log(data);
      addToast({
        title: "Success",
        message: "Password updated",
        type: "success",
      });
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as ResponseMessage;

      addToast({
        title: "Something went wrong",
        message: data.message,
        type: "error",
      });
    },
  });
};