import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/lib/api-client"
import { CompanyDetails, CompanyIntro } from "src/types";

const getAllEmployersIntro = () => {
    return apiClient.get<CompanyIntro[]>("/company/list-intro");
};

export const useGetAllEmployersIntro = () => {
    return useQuery({
        queryKey: ["getAllEmployersIntro"],
        queryFn: getAllEmployersIntro,
    });
};

const getEmployerDetail = (id: number) => {
    return apiClient.get<CompanyDetails>(`/company/detail/${id}`);
};

export const useGetEmployerDetail = (id: number) => {
    return useQuery({
        queryKey: ["getEmployerDetail", id],
        queryFn: () => getEmployerDetail(id),
    });
};
