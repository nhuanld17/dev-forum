import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/lib/api-client";
import { job, jobDetail } from "src/types";

const getAllJobs = () => {
  return apiClient.get<job[]>('/jobs');
};

export const useGetAllJobs = () => {
  return useQuery({
    queryKey: ['getAllJobs'],
    queryFn: getAllJobs,
  });
};

const getJobDetail = (id: number) => {
  return apiClient.get<jobDetail>(`/jobs/${id}`);
}

export const useGetJobDetail = (id: number) => {
  return useQuery({
    queryKey: ['getJobDetail', id],
    queryFn: () => getJobDetail(id),
  });
}