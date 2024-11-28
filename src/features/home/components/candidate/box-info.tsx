import { jobDetail } from "src/types";

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

export const BoxInfo = ({jobdetails}: {jobdetails: jobDetail}) => {
    return (
        <div className="flex flex-col p-8 gap-6 rounded-lg border-2 border-[#E7F0FA]">
            <div className="flex gap-4">
                <img src={jobdetails.profilePictureLink} alt="logo company"  className="w-[64px] h-[64px] rounded-[6px]"/>
                <div className="flex flex-col gap-2">
                    <span className="text-[20px] font-[500] leading-8">
                        {jobdetails.companyName}
                    </span>
                    <span className="text-[14px] leading-5 text-[#767F8C]">
                        Infomation service
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Info title={"Founded in:"} value={jobdetails.dateEstablished} />
                <Info title="Organization type:" value={"Private Company"} />
                <Info title="Company size:" value={jobdetails.teamSize} />
                <Info title="Phone" value={jobdetails.phone} />
                <Info title="Email" value={jobdetails.email} /> 
                <Info title="Website" value={jobdetails.website} />
            </div>
        </div>
    );
};
