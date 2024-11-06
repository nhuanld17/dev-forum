import { Outlet } from "react-router-dom";

export const AppRoot = () => {
    return (
        <div>
            <h1>App Test</h1>
            <Outlet />
        </div>
    );
};