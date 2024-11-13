import { Outlet } from "react-router-dom";
import { OverlayContainer } from "src/components/ui/overlay";

/**
* OverlayContainer is a component that contains all overlay components
* Outlet is a component that renders the matched route
*/
export const AppRouterRoot = () => {
    return (
        <>
            <OverlayContainer />
            <Outlet />
        </>
    );
};
