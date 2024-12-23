import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/lib/api-client";
import { ApplicationDto } from "src/types";


export const getApplicationDto = (
  id: string,
  filter: string,
  currentPage: number,
  sortDirection: string,
) => {  
  let url = `jobs/${id}/application/search?q=${filter}&size=5&page=${currentPage}&sortField=id&sortDirection=${sortDirection}`;
  return apiClient.get<ApplicationDto[]>(url);
}

export const useGetApplicationDto = (
  id: string,
  filter: string,
  currentPage: number,
  sortDirection: string,
) => {
  return useQuery({
    queryKey: ["getApplicationDto", { id, filter, currentPage, sortDirection }],
    queryFn: () => getApplicationDto(id, filter, currentPage, sortDirection),
  });
};