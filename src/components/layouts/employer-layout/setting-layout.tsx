import { EmployerSettingNav } from "./components";

export const EmployerSettingLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <EmployerSettingNav/>
            <div className="flex-1">{children}</div>
        </div>
    );
};
