import { LocalIcon } from "src/assets/icons";
import { jobDetail } from "src/types";

type BoxInfoProps = {
    image: string;
    title: string;
    value: string | number;
}

const BoxInfo = ({ image, title, value }: BoxInfoProps) => {
    return (
        <div className="flex flex-col gap-4 w-[33%]">
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


export const JobOverview = ({ jobdetails }: { jobdetails: jobDetail }) => {
    return (
        <div className="flex flex-col p-8 gap-6 rounded-lg border-2 border-[#E7F0FA]">
            <span className="text-[20px] font-[500] leading-8">
                Job Overview
            </span>
            <div className="flex gap-5">
                <BoxInfo image="calendar" title="JOB POSTED:" value={jobdetails.postAt} />
                <BoxInfo image="time" title="JOB EXPIRE IN:" value={jobdetails.expirationDate} />
                <BoxInfo image="logoImage" title="EDUCATION:" value={jobdetails.education} />
            </div>
            <div className="flex gap-5">
                <BoxInfo image="wallet" title="SALERY:" value={jobdetails.maxSalary} />
                <BoxInfo image="logoImage" title="JOB TYPE:" value={jobdetails.jobType} />
                <BoxInfo image="logoImage" title="EXPERIENCE:" value={jobdetails.experience} />
            </div>
            <div className="flex gap-5">
                <BoxInfo image="location" title="LOCATION:" value={"Viet Nam"} />
            </div>
        </div>
    );
};
