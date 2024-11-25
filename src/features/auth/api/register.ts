import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React from "react";
import { useOverlay } from "src/components/ui/overlay";
import { useToast } from "src/components/ui/toast";
import { apiClient } from "src/lib/api-client";
import { ResponseMessage } from "src/types/common";
import { z } from "zod";

export const registerInputSchema = z.object({
  fullName: z.string().min(1, "Required"),
  email: z.string().min(1, "Required").email("Invalid email"),
  password: z.string().min(6, "Required"),
  role: z.enum(["candidate", "employer"]).refine((value) => value !== undefined, {
    message: "Role is required",
  }),
});

const postRegisterData = (data: z.infer<typeof registerInputSchema>) => {
  return apiClient.post("/auth/register-candidate", data);
};

export const useRegister = (alert: React.ReactNode) => {
  const { display } = useOverlay();
  const { addToast } = useToast();

  return useMutation({
    mutationFn: postRegisterData,
    onSuccess: () => {
      display(alert);
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
