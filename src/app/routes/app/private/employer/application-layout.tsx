import { Outlet } from "react-router-dom";


export const ApplicationsLayout = () => {
    return (
        <div className="relative flex min-h-screen flex-col">
            <Outlet/>
        </div>
    );
}