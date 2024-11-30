import { CompanyIntro } from "src/types";
import { useNavigate } from "react-router-dom";
import { LocalIcon } from "src/assets/icons";

export const  BoxCompanyIntro = ({ companyIntro }: { companyIntro: CompanyIntro }) => {
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`details/${id}`);
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleClick(companyIntro.id);
    };

    return (
        <div onClick={handleButtonClick} className="flex flex-col p-[32px] justify-center items-start gap-6 flex-shrink-0 w-[424px] h-[204px] border rounded-xl hover:scale-[1.01] hover:border-[#0A65CC] hover:bg-gradient-to-r from-[#fff2da] to-[#FFF] ">
            <div className="flex items-start gap-4">
                <img src={companyIntro.profilePictureLink} alt="logo company" className="w-[56px] h-[56px] rounded" />
                <div className="flex flex-col items-start gap-[6px]">
                    <div className="flex items-start gap-2">
                        <span className="px-[12px] py-[3px] bg-[#e9fff7] text-[14px] text-[#2fc64d] leading-5 rounded-[52px]">Technology</span>
                        <span className="px-[12px] py-[3px] bg-[#FFEDED] text-[14px] text-[#FF4F4F] leading-5 rounded-[52px]">Featured</span>
                    </div>
                    <span className="flex items-center gap-[6px] text-[14px] text-[#939AAD] leading-5">
                        <LocalIcon iconName="location_gray" height={18} width={18} />
                        Viet Nam
                    </span>
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-[20px] font-[500] leading-8">
                    {companyIntro.companyName}
                </span>
                <div className="flex items-center gap-4 text-[#636A80]">
                    <span className="flex items-center">
                        <LocalIcon iconName="briefcase_gray" width={18} height={18} />
                        {companyIntro.teamSize}
                    </span>
                    <span className="flex items-center">
                        <LocalIcon iconName="briefcase_gray" width={18} height={18} />
                        {companyIntro.numberJobs} - Open job
                    </span>
                </div>
            </div>
        </div>
    )
};
