import { apiClient } from "src/lib/api-client";
import { CandidateInfo, CandidateIntro } from "src/types";
import { useQuery } from "@tanstack/react-query";


export const getAllCandidatesIntro = () => {
    return apiClient.get<CandidateIntro[]>("/candidate/list-intro");
};

export const useGetAllCandidatesIntro = () => {
    return useQuery({
        queryKey: ["getAllCandidatesIntro"],
        queryFn: getAllCandidatesIntro,
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



