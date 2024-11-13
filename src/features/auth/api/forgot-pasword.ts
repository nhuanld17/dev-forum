import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "src/components/ui/toast";
import { apiClient } from "src/lib/api-client";
import { ResponseMessage } from "src/types/common";
import { z } from "zod";

export const forgotPasswordInputSchema = z.object({
  email: z.string().min(1, "Required").email("Invalid email"),
});

const postForgotPasswordData = (email: string) => {
  return apiClient.post(`/auth/forgot-password/${email}`);
};

export const useForgotPassword = () => {
  const { addToast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return useMutation({
    mutationFn: (submittedEmail: string) => {
      setEmail(submittedEmail);

      return postForgotPasswordData(submittedEmail);
    },
    onSuccess: () => {
      addToast({
        title: "OTP code sent",
        message: "Check your email box to get the OTP code",
        type: "info",
      });
      navigate(`/auth/otp/${email}`);
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
