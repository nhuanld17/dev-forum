import { CandidateSettingNav } from "./components/candidate-setting-nav";

export const CandidateSettingLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <CandidateSettingNav/>
            <div className="flex-1">{children}</div>
        </div>
    );
};
