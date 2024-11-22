import { Outlet } from "react-router-dom";
import { EmployerLayout } from "src/components/layouts";

export const EmployerRoot = () => { 
    return (
        <EmployerLayout>
            <Outlet/>
        </EmployerLayout>
    );
};
