import { apiClient } from "src/lib/api-client";
import { CandidateInfo, CandidateIntro } from "src/types";
import { useQuery } from "@tanstack/react-query";


export const getAllCandidatesIntro = (
    filter: string,
    currentPage: number,
    sortDirection: string,
    experience?: string,   // Thêm tham số experience
    education?: string,   // Thêm tham số education
    gender?: string       // Thêm tham số gender
  ) => {
    // Xây dựng URL với các tham số động
    let url = `/candidate/search?q=${filter}&size=5&page=${currentPage}&sortField=id&sortDirection=${sortDirection}`;
    
    if (experience) {
      url += `&experience=${experience}`;
    }
    if (education) {
      url += `&education=${education}`;
    }
    if (gender) {
      url += `&gender=${gender}`;
    }
  
    // Thực hiện gọi API với URL đã xây dựng
    return apiClient.get<CandidateIntro[]>(url);
  };
  

  export const useGetAllCandidatesIntro = (
    filter: string,
    currentPage: number,
    sortDirection: string,
    experience?: string,   // Thêm tham số experience
    education?: string,   // Thêm tham số education
    gender?: string       // Thêm tham số gender
  ) => {
    return useQuery({
      queryKey: ["getAllCandidatesIntro", { filter, currentPage, sortDirection, experience, education, gender }],
      queryFn: () => getAllCandidatesIntro(filter, currentPage, sortDirection, experience, education, gender),
    });
  };

export const getCandidateIntroDetail = (id: number) => {
    return apiClient.get<CandidateInfo>(`/candidate/check/detail/${id}`);
};

export const useGetCandidateIntroDetail = (id: number) => {
    return useQuery({
        queryKey: ["getCandidateIntroDetail", id],
        queryFn: () => getCandidateIntroDetail(id),
    });
};



