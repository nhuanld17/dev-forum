import { apiClient } from "src/lib/api-client";
import { date, z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "src/components/ui";
import { ResponseMessage } from "src/types/common";

export const personalSchema = z.object({
    fullName: z.string().min(1, "Required"),
    title: z.string().min(1, "Required"),
    gender: z.enum(["0", "1"]).refine((value) => value !== undefined, {
        message: "gender is required",
    }),
    dateOfBirth: z.string().refine((value) => value !== undefined, {
        message: "date of birth is required"
    }),
    porfolio: z.string().min(1, "Required"),
    pictureProfileLink: z.string().min(0, "Required"),
});

export const postUpdatePersonalData = (data: z.infer<typeof personalSchema>) => {
    return apiClient.post("/candidate/basic/update", data);
};

export const useUpdatePersonal = () => {
    const { addToast } = useToast();
    return useMutation({
        mutationFn: postUpdatePersonalData,
        onSuccess: (data) => {
            console.log(data);
            addToast({
                title: "Success",
                message: "Personal information updated",
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

