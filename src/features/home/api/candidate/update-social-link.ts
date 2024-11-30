import { apiClient } from "src/lib/api-client";
import { useToast } from "src/components/ui";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ResponseMessage } from "src/types/common";

export const socialLinkSchema = z.object({
    facebookLink: z.string().min(1, "Required"),
    twitterLink: z.string().min(1, "Required"),
    linkedLink: z.string().min(1, "Required"),
});

export const updateSocialLink = (data: z.infer<typeof socialLinkSchema>) => {
    return apiClient.post("/candidate/social-link/update", data);
};

export const useUpdateSocialLink = () => {
    const { addToast } = useToast();
    return useMutation({
        mutationFn: updateSocialLink,
        onSuccess: (data) => {
            console.log(data);
            addToast({
                title: "Success",
                message: "Social links updated",
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
}

