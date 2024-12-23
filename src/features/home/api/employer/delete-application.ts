import { useMutation } from "@tanstack/react-query";
import { useToast } from "src/components/ui";
import { apiClient } from "src/lib/api-client";
import { queryClient } from "src/lib/react-query";


export const deleteApplicationById = (id: string) => {
    return apiClient.post(`job/delete/${id}`); 
}

export const useDeleteApplicationById = () => {
    const { addToast } = useToast();
    return useMutation({
        mutationFn: (id: string) => deleteApplicationById(id),
        onSuccess: (data) => {
          addToast({
            title: "Success",
            message: "Application deleted successfully",
            type: "success",
          });
          queryClient.invalidateQueries({ queryKey: ["applications"] });
        },
        onError: (error) => {
          addToast({
            title: "Some thing went wrong",
            message: error.message,
            type: "error",
          })
        },
    })
}