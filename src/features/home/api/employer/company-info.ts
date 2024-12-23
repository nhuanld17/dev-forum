import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/lib/api-client"
import { CompanyInfoSetting } from "src/types"


export const getCompanyInfoSetting = () => { 
    return apiClient.get<CompanyInfoSetting>("/company/info");
}

export const useGetCompanyInfoSetting = () => {
  return useQuery({
    queryKey: ["company-info"],
    queryFn: getCompanyInfoSetting,
  })
}