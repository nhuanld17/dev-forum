import { CompanyInfo } from "src/types";

type BoxInfoProps = {
    title: string;
    value: string | number;
}
const Info = ({ title, value }: BoxInfoProps) => {
    return (
        <div className="flex justify-between">
            <span className="text-[16px] text-[#5E6670] leading-6">
                {title}
            </span>
            <span className="text-[16px] leading-6">
                {value}
            </span>
        </div>
    )
}

export const BoxInfo = ({companyinfo}:{companyinfo :CompanyInfo}) => {
    return (
        <div className="flex flex-col p-8 gap-6 rounded-lg border-2 border-[#E7F0FA]">
            <div className="flex gap-4">
                <img src={companyinfo.profilePictureLink} alt="logo company"  className="w-[64px] h-[64px] rounded-[6px]"/>
                <div className="flex flex-col gap-2">
                    <span className="text-[20px] font-[500] leading-8">
                        {companyinfo.companyName}
                    </span>
                    <span className="text-[14px] leading-5 text-[#767F8C]">
                        Infomation service
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Info title={"Founded in:"} value={companyinfo.dateEstablished} />
                <Info title="Organization type:" value={"Private Company"} />
                <Info title="Company size:" value={companyinfo.teamSize} />
                <Info title="Phone" value={companyinfo.phone} />
                <Info title="Email" value={companyinfo.email} />
                <Info title="Website" value={companyinfo.website} />
            </div>
        </div>
    );
};
