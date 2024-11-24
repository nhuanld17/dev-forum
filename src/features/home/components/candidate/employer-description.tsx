import { CompanyDetails } from "src/types";

export const EmployerDescription = ({ companydetails }: { companydetails: CompanyDetails }) => {
    return (
        <div className="flex flex-col w-[58%] gap-9">
            <div className="flex flex-col gap-4">
                <span className="text-[20px] font-[500] leading-8">
                    Description
                </span>
                <span className="text-[16px] text-[#5E6670] leading-6">
                    {companydetails.description}
                </span>
            </div>
            <div className="flex flex-col gap-4">
                <span className="text-[20px] font-[500] leading-8">
                    Company Vision
                </span>
                <span className="text-[16px] text-[#5E6670] leading-6">
                    {companydetails.aboutUs}
                </span>
            </div>
        </div>
    );  
};
