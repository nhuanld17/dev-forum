import { Outlet } from "react-router-dom";
import { OverlayContainer } from "src/components/ui/overlay";

export const AppRouterRoot = () => {
    return (
        <>
            <OverlayContainer />
            <Outlet />
        </>
    );
};
