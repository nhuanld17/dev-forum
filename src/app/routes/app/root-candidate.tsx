import { Outlet } from "react-router-dom";
import { CandidateLayout } from "src/components/layouts/candidate-layout/candidate-layout";

export const CandidateRoot = () => {
    return (
        <CandidateLayout>
            <Outlet />
        </CandidateLayout>
    );
};