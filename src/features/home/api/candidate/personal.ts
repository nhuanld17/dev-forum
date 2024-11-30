import { apiClient } from "src/lib/api-client";
import { useQuery } from "@tanstack/react-query";
import { CandidateBasic } from "src/types";

export const getCandidateBasic = () => {
    return apiClient.get<CandidateBasic>("/candidate/basic");
};

export const useGetCandidateBasic = () => {
    return useQuery({
        queryKey: ["candidate-basic"],
        queryFn: getCandidateBasic,
    });
};

