import { Outlet } from "react-router-dom";
import { ProfileLayout } from "src/components/layouts";

export const ProfileRoute = () => {
    return (
        <ProfileLayout>
            <Outlet/>
        </ProfileLayout>
    )
};
