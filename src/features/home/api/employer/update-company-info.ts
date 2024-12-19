import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "src/components/ui";
import { apiClient } from "src/lib/api-client";
import { ResponseMessage } from "src/types";
import { z } from "zod";


export const CompanyInfoSchema = z.object({
  imgLink: z.string().min(1, "Required"),
  companyName: z.string().min(1, "Required"),
  aboutUs: z.string().min(1, "Required"),
})

const postUpdateCompanyInfo = (data: z.infer<typeof CompanyInfoSchema>) => {
  return apiClient.put("/company/update-info", data);
}

export const useUpdateCompanyInfo = () => {
  const { addToast } = useToast();
  return useMutation({
    mutationFn: postUpdateCompanyInfo,
    onSuccess: (data) => {
      console.log(data);
      addToast({
        title: "Success",
        message: "Company information updated",
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