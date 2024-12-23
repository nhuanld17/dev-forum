 import { QueryClientProvider } from "@tanstack/react-query"; //provide all queries and mutations to component tree
import { ToastContainer } from "src/components/ui/toast";
import { queryClient } from "src/lib/react-query";

/**
 * App Provider contains all components that need to be provided to the app (is returned by router)
 * @param {React.ReactNode} children
 * @returns {JSX.Element}
 */
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ToastContainer />
                {children}
            </QueryClientProvider>
        </>
    );
};