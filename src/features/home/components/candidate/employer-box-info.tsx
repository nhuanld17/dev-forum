import { LocalIcon } from "src/assets/icons";
import { CompanyDetails } from "src/types";

type BoxInfoProps = {
    className?:string;
    image: string;
    title: string;
    value: string | number;
}

const Info = ({className, image, title, value }: BoxInfoProps) => {
    return (
        <div className={`flex gap-4 items-center pb-6 ${className}`}>
            <LocalIcon iconName={image} height={32} width={32} />
            <div className="flex flex-col gap">
                <span className="text-[12px] text-[#5E6670]">
                    {title}
                </span>
                <span className="text-[16px] font-[500]">
                    {value}
                </span>
            </div>
        </div>
    )
}

const BoxInfo = ({ image, title, value }: BoxInfoProps) => {
    return (
        <div className="flex flex-col gap-4 w-[48%]">
            <LocalIcon iconName={image} height={32} width={32} />
            <div className="flex flex-col gap-1">
                <span className="text-[12px] text-[#767F8C] leading-4">
                    {title}
                </span>
                <span className="text-[14px] font-[500] leading-5">
                    {value}
                </span>
            </div>
        </div>
    );
}

export const EmployerBoxInfo = ({ companydetails }: { companydetails: CompanyDetails }) => {
    return (
        <div className="flex flex-col flex-1 gap-6">
            <div className="flex flex-col rounded-lg border border-[#E7F0FA] p-8 gap-6">
                <div className="flex gap-5">
                    <BoxInfo image="calendar" title="FOUNDED IN:" value={companydetails.dateEstablished} />
                    <BoxInfo image="time" title="ORGANIZATION TYPE:" value={"Private Company"} />
                </div>
                <div className="flex gap-5">
                    <BoxInfo image="wallet" title="TEAM SIZE:" value={companydetails.teamSize} />
                    <BoxInfo image="logoImage" title="INDUSTRY TYPES:" value={"Technology"} />
                </div>
            </div>
            <div className="flex flex-col rounded-lg border border-[#E7F0FA] p-8 gap-4">
                <span className="text-[20px] font-[500] leading-8">
                    Contact Information
                </span>
                <div className="flex flex-col gap-6">
                    <Info image="global_blue" title="WEBSITE" value={companydetails.website} className={"border-b-2"}/>
                    <Info image="phone" title="PHONE" value={companydetails.phone} className={"border-b-2"}/>
                    <Info image="envelope" title="EMAIL ADDRESS" value={companydetails.email} />
                </div>
            </div>
            <div className="flex flex-col rounded-lg border border-[#E7F0FA] p-8 gap-4">
                <span className="text-[18px] font-[500] leading-[18px]">
                    Follow us on:
                </span>
                <div className="flex gap-3">
                    <LocalIcon iconName="facebook_link" height={48} width={48} className="hover:scale-110"/>
                    <LocalIcon iconName="twitter_link" height={48} width={48} className="hover:scale-110"/>
                    <LocalIcon iconName="linkedin_link" height={48} width={48} className="hover:scale-110"/>
                </div>
            </div>
        </div>
    );
};
