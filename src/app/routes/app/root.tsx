import { Outlet } from "react-router-dom";
import { AppLayout } from "src/components/layouts";
import { Button } from "src/components/ui";

export const AppRoot = () => {
    return (
       <AppLayout>
            <Outlet />
       </AppLayout>
    );
};