import { z } from "zod";
import { apiClient } from "src/lib/api-client";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ResponseMessage } from "src/types/common";
import { useToast } from "src/components/ui";

export const applyJobSchema = z.object({
    idJob: z.string(),
    cvLink: z.string(),
});

export const postApplyJob = (data: z.infer<typeof applyJobSchema>) => {
    return apiClient.post("/candidate/application", data);
};

export const useApplyJob = () => {
    const { addToast } = useToast();
    return useMutation({
        mutationFn: postApplyJob,
        onSuccess: (data) => {
            console.log(data);
            addToast({
                title: "Success",
                message: "Application submitted",
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
