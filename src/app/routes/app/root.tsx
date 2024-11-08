import { Outlet } from "react-router-dom";
import { AppLayout } from "src/components/layouts";

export const AppRoot = () => {
    return (
       <AppLayout>
            <Outlet />
       </AppLayout>
    );
};