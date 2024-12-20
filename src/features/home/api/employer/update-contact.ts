import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "src/components/ui";
import { apiClient } from "src/lib/api-client";
import { ResponseMessage } from "src/types";
import { z } from "zod";



export const CompanyContactSchema = z.object({
  location: z.string().min(1, "Required"),
  phoneNumber: z.string().min(10, "Required").max(10, "Required"),
  email: z.string().email("Required")
});

export const postUpdateContact = (data: z.infer<typeof CompanyContactSchema>) => {
  return apiClient.put("company/update-contact-info", data);
}

export const useUpdateContactInfo = () => {
  const { addToast } = useToast();

  return useMutation({
    mutationFn: postUpdateContact,
    onSuccess: (data) => {
      console.log(data);
      addToast({
        title: "Success",
        message: "Contact info updated",
        type: "success"
      })
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as ResponseMessage;

      addToast({
        title: "Something went wrong",
        message: data.message,
        type: "error"
      })
    }
  })
}