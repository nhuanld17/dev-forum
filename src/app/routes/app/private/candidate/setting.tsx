import { Outlet } from "react-router-dom"
import { CandidateSettingLayout } from "src/components/layouts"

export const SettingRoute = () => {
    return (
        <CandidateSettingLayout>
            <Outlet/>
        </CandidateSettingLayout>
    );
};
