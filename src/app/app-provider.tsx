import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "src/components/ui/toast";
import { queryClient } from "src/lib/react-query";

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