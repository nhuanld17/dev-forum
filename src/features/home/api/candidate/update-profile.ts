import { apiClient } from "src/lib/api-client";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "src/components/ui";
import { AxiosError } from "axios";
import { ResponseMessage } from "src/types/common";

export const profileSchema = z.object({
    education: z.enum(["Graduate", "Master", "12/12","College"]).refine((value) => value !== undefined, {
        message: "education is required",
    }),
    experience: z.enum(["1 year", "1 - 2 year", "2 - 3 year", "~ 5 year"]).refine((value) => value !== undefined, {
        message: "experience is required",
    }),
    bio: z.string().min(1, "Required"),
});

const postUpdateProfileData = (data: z.infer<typeof profileSchema>) => {
    return apiClient.post("/candidate/profile/update", data);
}

export const useUpdateProfile = () => {
    const { addToast } = useToast();
    return useMutation({
        mutationFn: postUpdateProfileData,
        onSuccess: (data) => {
            console.log(data);
            addToast({
                title: "Success",
                message: "Profile information updated",
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
