import { Outlet } from "react-router-dom";
import { CandidateProfileLayout } from "src/components/layouts";

export const ProfileRoute = () => {
    return (
        <CandidateProfileLayout>
            <Outlet/>
        </CandidateProfileLayout>
    )
};
