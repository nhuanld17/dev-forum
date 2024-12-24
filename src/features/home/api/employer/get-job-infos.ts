import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/lib/api-client";
import { jobInfo } from "src/types";

export const getJobInfos = (id: number) => {
    return apiClient.get<jobInfo>(`/company/job-info/${id}`);
}

export const useGetJobInfos = (id: number) => {
    return useQuery({
        queryKey: ["job-info",{id}],
        queryFn: () => getJobInfos(id),
    });
}