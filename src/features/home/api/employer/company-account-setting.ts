import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/lib/api-client"
import { CompanyContactInfo } from "src/types";



export const getContactInfo = () => { 
  return apiClient.get<CompanyContactInfo>("/company/contact-info");
};

export const useGetContactInfo = () => {
  return useQuery({
    queryKey: ["contact-info"],
    queryFn: getContactInfo,
  });
}