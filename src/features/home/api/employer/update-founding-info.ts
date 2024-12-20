import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "src/components/ui";
import { apiClient } from "src/lib/api-client";
import { ResponseMessage } from "src/types";
import { z } from "zod";


export const FoundingInfoSchema = z.object({
  industryType: z.enum(["IT", "Finance", "Healthcare", "Education", "Technology", "Other"]).refine((value) => value !== undefined, {
    message: "industry type is required",
  }),
  teamSize: z.string().min(1, "Required"),
  yearOfEstablishment: z.string().refine((value) => value !== undefined, {
    message: "date of birth is required"
  }),
  companyWebSite: z.string().min(1, "Required"),
})

const postUpdateFoundingInfoData = (data: z.infer<typeof FoundingInfoSchema>) => {
  return apiClient.put("/company/update-founding-info", data);
}

export const useUpdateFoundingInfo = () => {
  const { addToast } = useToast();
  return useMutation({
    mutationFn: postUpdateFoundingInfoData,
    onSuccess: (data) => {
      console.log(data);
      addToast({
        title: "Success",
        message: "Founding information updated",
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