
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/lib/api-client";
import { JobCompany, jobDetail } from "src/types";

const getAllCompanyJobs = (page: number, pageSize: number, sortField: string, sortDirection: string) => {
  return apiClient.get<JobCompany[]>(`/company/list-job?page=${page}&size=${pageSize}&sortField=${sortField}&sortDirection=${sortDirection}`);
};

const createCompanyJob  = (data: jobDetail) => {
  return apiClient.post("/company/create-job", data);
}


// Hook sử dụng useQuery với giá trị mặc định
export const useGetAllCompanyJobs = (page: number, pageSize: number, sortField: string, sortDirection: string) => {
  return useQuery({
    queryKey: ['list-job', { page, pageSize, sortField, sortDirection }], // Đặt queryKey cụ thể
    queryFn: () => getAllCompanyJobs(page, pageSize, sortField, sortDirection), // Truyền tham số cho queryFn
  });
};

// Hook sử dụng để tạo job
export const useCreateCompanyJob = (data: jobDetail) => {
  return useQuery({
    queryKey: ['create-job', data], // Đặt queryKey cụ thể
    queryFn: () => createCompanyJob(data), // Truyền tham số cho queryFn
  });
}

