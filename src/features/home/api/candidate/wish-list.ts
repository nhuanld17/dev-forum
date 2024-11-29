import { apiClient } from "src/lib/api-client";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ResponseMessage } from "src/types/common";
import { useToast } from "src/components/ui";

export const postWishList =(idJob: string) => {
    return apiClient.post(`/candidate/wish-list?jobId=${idJob}`);
};

export const usePostWishList = () => {
    const { addToast } = useToast();
    return useMutation({
        mutationFn: postWishList,
        onSuccess: (data) => {
            console.log(data);
            addToast({
                title: "Success",
                message: "Wish list updated",
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