import { CandidateHeader } from './components/candidate-header';
import { CandidateFooter } from './components/candidate-footer';

export const CandidateLayout = ({children}: {children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col">
            <CandidateHeader/>
            <main className="flex-1">{children}</main>
            <CandidateFooter/>
        </div>
    );
};
