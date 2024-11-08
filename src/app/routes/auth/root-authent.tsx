import { Outlet } from "react-router-dom";
import { AuthLayout } from "src/components/layouts";

export const AuthRoot = () => {
    return (
        <AuthLayout>
        <Outlet />
      </AuthLayout>
    );
};