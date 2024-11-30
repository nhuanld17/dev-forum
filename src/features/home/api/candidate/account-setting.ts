import { apiClient } from "src/lib/api-client";
import { CandidateContact } from "src/types";
import { useQuery } from "@tanstack/react-query";

export const getAccountSetting = () => {
    return apiClient.get<CandidateContact>("candidate/contact");
};

export const useGetAccountSetting = () => {
    return useQuery({
        queryKey: ["account-setting"],
        queryFn: getAccountSetting,
    });
};
