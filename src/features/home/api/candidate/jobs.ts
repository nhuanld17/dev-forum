import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/lib/api-client";
import { job, jobApply, jobDetail } from "src/types";

const getAllJobs = (
  key: string,
  currentPage: number,
  sortDirection: string,
  experience?: string,  
  jobType?: string
) => {
  let url = `job/search?q=${key}&size=5&page=${currentPage}&sortField=id&sortDirection=${sortDirection}`;

  if (experience) {
    url += `&experience=${experience}`;
  }
  if (jobType) {
    url += `&jobType=${jobType}`;
  }
  console.log(url);
  return apiClient.get<job[]>(url);
};

export const useGetAllJobs = (
  key: string,
  currentPage: number, 
  sortDirection: string,
  experience?: string,   
  jobType?: string
) => {
  return useQuery({
    queryKey: ['search', { key, currentPage, sortDirection, experience, jobType}],
    queryFn: () => getAllJobs(key, currentPage, sortDirection, experience, jobType),
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

