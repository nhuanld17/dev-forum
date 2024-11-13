/**
 * AppLayout component, layout for all app routes
 * @param {React.ReactNode} children
 * @returns{JSX.Element}
 */
export const AppLayout = ({children}: {children: React.ReactNode }) => {
    // const { components } = useBreadcrumb();
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
        </div>
    );
};