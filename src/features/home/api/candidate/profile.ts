import { apiClient } from "src/lib/api-client";
import { CandidateProfile } from "src/types";
import { useQuery } from "@tanstack/react-query";

export const getProfileDetail = () => {
    return apiClient.get<CandidateProfile>("/candidate/profile");
};

export const useGetProfileDetail = () => {
    return useQuery({
        queryKey: ["candidate-profile"],
        queryFn: getProfileDetail,
    });
};
