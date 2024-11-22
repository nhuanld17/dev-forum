
import { AppHeaderDashBoard } from './components/header/header-dashboard';
import { AppFooterDashBoard } from './components/footer/footer-dashboard';
import SectionFindJob from './components/home/section-find-job';
import SectionPopularVacancy from './components/home/section-popular-vacancy';
import SectionPopularCategory from './components/home/section-popular-category';
import SectionRegister from './components/home/section-register-now';
import SectionTopCompanies from './components/home/section-top-company';
/**
 * AppLayout component, layout for all app routes
 * @param {React.ReactNode} children
 * @returns{JSX.Element}
 */
export const AppLayout = ({children}: {children: React.ReactNode }) => {
    // const { components } = useBreadcrumb();
    return (
        <div className="flex min-h-screen flex-col">
            <AppHeaderDashBoard />
            <SectionFindJob />
            <SectionPopularVacancy />
            <SectionPopularCategory />
            <SectionTopCompanies />
            <SectionRegister />
            <main className="flex-1">{children}</main>
            <AppFooterDashBoard/>
        </div>
    );
};
