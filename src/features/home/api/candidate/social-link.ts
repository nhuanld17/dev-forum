import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/lib/api-client"
import { SocialLink } from "src/types";

const getSocialLink = () => {
    return apiClient.get<SocialLink>("/candidate/social-link");
};

export const useGetSocialLink = () => {
    return useQuery({
        queryKey: ["social-link"],
        queryFn: getSocialLink,
    });
};
