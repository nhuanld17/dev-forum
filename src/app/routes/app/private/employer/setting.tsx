import { Outlet } from "react-router-dom"
import { EmployerSettingLayout } from "src/components/layouts"

export const SettingRoute = () => {
    return (
        <EmployerSettingLayout>
            <Outlet/>
        </EmployerSettingLayout>
    );
};
