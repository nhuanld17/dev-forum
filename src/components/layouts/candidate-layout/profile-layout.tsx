import { CandidateNav } from "./components";

export const CandidateProfileLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="flex min-h-screen px-[50px]">
            <CandidateNav/>
            <div className="flex-1 pl-10 pt-10">{children}</div>
        </div>
    );
};