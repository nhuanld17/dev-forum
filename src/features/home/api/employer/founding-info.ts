import { useQuery } from "@tanstack/react-query"
import { apiClient } from "src/lib/api-client"
import { FoundingInfo } from "src/types"


export const getFoundingInfo = () => {
  return apiClient.get<FoundingInfo>("/company/founding-info")
}

export const useGetFoundingInfo = () => {
  return useQuery({
    queryKey: ["founding-info"],
    queryFn: getFoundingInfo,
  })
}
