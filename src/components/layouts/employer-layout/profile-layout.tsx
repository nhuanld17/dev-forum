import { EmployerNav } from "./components";

export const EmployerProfileLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="flex min-h-screen px-[50px]">
            <EmployerNav/>
            <div className="flex-1 pl-10 pt-10">{children}</div>
        </div>
    );
};