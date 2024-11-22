import { Outlet } from "react-router-dom";
import { EmployerProfileLayout } from "src/components/layouts";

export const ProfileRoute = () => {
    return (
        <EmployerProfileLayout>
            <Outlet/>
        </EmployerProfileLayout>
    )
};
