import { useMutation } from "@tanstack/react-query";
import { useToast } from "src/components/ui";
import { apiClient } from "src/lib/api-client";


export const deleteJobById = (id: number) => {
    return apiClient.post(`/delete-job/${id}`); 
}

export const useDeleteJobById = () => {
    const { addToast } = useToast();
    return useMutation({
        mutationFn: (id: number) => deleteJobById(id),
        onSuccess: (data) => {
          addToast({
            title: "Success",
            message: "Job deleted successfully",
            type: "success",
          });
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