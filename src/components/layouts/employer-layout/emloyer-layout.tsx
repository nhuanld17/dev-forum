import { EmployeeFooter } from "./components/employer-footer";
import { EmployeeHeader } from "./components/employer-header";

/**
 * AppLayout component, layout for all app routes
 * @param {React.ReactNode} children
 * @returns{JSX.Element}
 */
export const EmployerLayout = ({children}: {children: React.ReactNode }) => {
    // const { components } = useBreadcrumb();
    return (
        <div className="relative flex min-h-screen flex-col">
            <EmployeeHeader/>
            <main className="flex-1">{children}</main>
            <EmployeeFooter/>
        </div>
    );
};
