import { apiClient } from "src/lib/api-client";
import { z } from "zod";
import { useToast } from "src/components/ui";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ResponseMessage } from "src/types/common";

export const accountSettingSchema = z.object({
    location: z.string().min(1, "Required"),
    phoneNumber: z.string().min(10, "Required").max(10, "Required"),
    email: z.string().email("Required"),
    currentPassword: z.string().min(0, "Required"),
    newPassword: z.string().min(0, "Required"),
});

export const postUpdateAccountSetting = (data: z.infer<typeof accountSettingSchema>) => {
    return apiClient.post("/candidate/contact/update", data);
};

export const useUpdateAccountSetting = () => {
    const { addToast } = useToast();
    return useMutation({
        mutationFn: postUpdateAccountSetting,
        onSuccess: (data) => {
            console.log(data);
            addToast({
                title: "Success",
                message: "Account setting updated",
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
