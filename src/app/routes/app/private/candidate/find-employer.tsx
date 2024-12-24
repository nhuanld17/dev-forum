import { useGetAllEmployersIntro } from "src/features/home/api/employer/employer";
import { CompanyIntro } from "src/types";
import { BoxCompanyIntro } from "src/features/home/components/candidate/boxCompanyIntro";

export const FindCompanyRoute = () => {
    const { data: companies, isLoading } = useGetAllEmployersIntro();

    if (!companies) {
        return <div>Loading...</div>;
    }

    return isLoading ? (
        <div>Loading...</div>
    ) : (
        <div className="flex items-center justify-center">
            <div className="w-[87%] flex gap-[16px] py-[20px] md:gap-[24px] md:py-[40px] justify-start flex-wrap">
                {(Array.isArray(companies?.data) && companies) ? (
                    companies.data.map((company: CompanyIntro) => (
                        <BoxCompanyIntro key={company.id} companyIntro={company} />
                    ))
                ) : (
                    <p>No companies available</p>
                )}
            </div>
        </div>

    );
};
