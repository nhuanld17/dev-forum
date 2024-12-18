import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/lib/api-client";
import { job, jobApply, jobDetail } from "src/types";

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

export const getJobFollowEmployer = (id: number) => {
  return apiClient.get<job[]>(`company/jobs/${id}`);
}

export const useGetJobFollowEmployer = (id: number) => {
  return useQuery({
    queryKey: ['getJobFollowEmployer', id],
    queryFn: () => getJobFollowEmployer(id),
  });
}


export const getJobAplly = () => {
  return apiClient.get<jobApply[]>('/candidate/application/list');
}

export const useGetJobApply = () => {
  return useQuery({
    queryKey: ['getJobApply'],
    queryFn: getJobAplly,
  });
}

export const getJobFavorite = () => {
  return apiClient.get<jobApply[]>('/candidate/wish-list');
}

export const useGetJobFavorite = () => {
  return useQuery({
    queryKey: ['getJobFavorite'],
    queryFn: getJobFavorite,
  });
}

