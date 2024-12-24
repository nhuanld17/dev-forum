import { CompanyIntro } from "src/types";
import { useNavigate } from "react-router-dom";
import { LocalIcon } from "src/assets/icons";

export const BoxCompanyIntro = ({ companyIntro }: { companyIntro: CompanyIntro }) => {
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`details/${id}`);
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleClick(companyIntro.id);
    };

    return (
        <div
            onClick={handleButtonClick}
            className="flex flex-col p-4 md:p-[32px] justify-center items-start gap-4 md:gap-6 flex-shrink-0 w-full md:w-[424px] h-auto md:h-[204px] border rounded-xl hover:scale-[1.01] hover:border-[#0A65CC] hover:bg-gradient-to-r from-[#fff2da] to-[#FFF] transition-all duration-500 ease-in-out"
        >
            <div className="flex items-start gap-4">
                <img
                    src={companyIntro.profilePictureLink}
                    alt="logo company"
                    className="w-[40px] h-[40px] md:w-[56px] md:h-[56px] rounded"
                />
                <div className="flex flex-col items-start gap-2 md:gap-[6px]">
                    <div className="flex items-start gap-2">
                        <span className="px-[8px] py-[2px] text-[12px] md:px-[12px] md:py-[3px] md:text-[14px] bg-[#e9fff7] text-[#2fc64d] leading-5 rounded-[52px]">
                            Technology
                        </span>
                        <span className="px-[8px] py-[2px] text-[12px] md:px-[12px] md:py-[3px] md:text-[14px] bg-[#FFEDED] text-[#FF4F4F] leading-5 rounded-[52px]">
                            Featured
                        </span>
                    </div>
                    <span className="flex items-center gap-2 md:gap-[6px] text-[12px] md:text-[14px] text-[#939AAD] leading-5">
                        <LocalIcon iconName="location_gray" height={16} width={16} />
                        Viet Nam
                    </span>
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-[16px] md:text-[20px] font-[500] leading-6 md:leading-8">
                    {companyIntro.companyName}
                </span>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-[#636A80]">
                    <span className="flex items-center">
                        <LocalIcon iconName="briefcase_gray" width={16} height={16} />
                        {companyIntro.teamSize}
                    </span>
                    <span className="flex items-center">
                        <LocalIcon iconName="briefcase_gray" width={16} height={16} />
                        {companyIntro.numberJobs} - Open job
                    </span>
                </div>
            </div>
        </div>

    )
};
