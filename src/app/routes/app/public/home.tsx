import { SectionFindJob } from "src/components/layouts/app-layout/components/home";
import { SectionTopCompanies } from "src/components/layouts/app-layout/components/home";
import { SectionPopularCategory } from "src/components/layouts/app-layout/components/home";
import { SectionPopularVacancy } from "src/components/layouts/app-layout/components/home";
import { SectionRegister } from "src/components/layouts/app-layout/components/home";

export const HomeRoute = () => {
    return (
        <>
            <SectionFindJob />
            <SectionPopularVacancy />
            <SectionPopularCategory />
            <SectionTopCompanies />
            <SectionRegister />
        </>
    )
}