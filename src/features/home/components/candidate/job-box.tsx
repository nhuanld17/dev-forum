import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui";
import { job } from "src/types";
import { useNavigate } from "react-router-dom";

const Box = ({ iconName, title }: { iconName: string; title: string }) => {
    return (
        <div className="flex gap-2 items-center">
            <LocalIcon iconName={iconName} height={20} width={20} />
            <span className="text-[12px] md:text-[14px] leading-5 text-[#5E6670]">{title}</span>
        </div>
    );
};

export const JobBox = ({ jobProps }: { jobProps: job }) => {
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/candidate/job-details/${id}`);
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleClick(jobProps.id);
    };

    return (
        <div
            onClick={() => handleClick(jobProps.id)}
            className="flex flex-col md:flex-row w-full md:w-[872px] h-auto p-4 md:p-6 transition-all duration-500 ease-in-out items-start md:items-center justify-between border rounded-[12px] hover:bg-gradient-to-r from-[#fff2da] to-[#FFF] hover:border-[1px] hover:scale-[1.01] hover:border-[blue]"
        >
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <img
                    src={jobProps.profilePictureLink}
                    alt=""
                    className="w-[48px] h-[48px] md:w-[68px] md:h-[68px] rounded-[6px]"
                />
                <div className="flex flex-col gap-2 md:gap-[12px]">
                    <div className="flex flex-wrap gap-2 md:gap-[8px]">
                        <span className="text-[14px] md:text-[18px] font-[500] leading-6 md:leading-7">{jobProps.title}</span>
                        <span className="px-2 md:px-[12px] py-[2px] md:py-[3px] rounded-[52px] bg-[#FCEEEE] text-[12px] md:text-[14px] text-[#E05151] font-[500] leading-5">
                            {jobProps.tags}
                        </span>
                        <span className="px-2 md:px-[12px] py-[2px] md:py-[3px] rounded-[52px] bg-[#E7F0FA] text-[12px] md:text-[14px] text-[#0A65CC] font-[500] leading-5">
                            {jobProps.jobType}
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-[16px]">
                        <Box iconName="location_gray" title="Viet Nam" />
                        <Box iconName="dollar_gray" title={String(jobProps.maxSalary)} />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 md:gap-[10px] mt-4 md:mt-0">
                <Button variant={"transparent"} startIcon={<LocalIcon iconName="bookmark_gray" />} />
                <Button
                    endIcon={<LocalIcon iconName="fi_arrow_right" />}
                    className="h-[40px] md:h-[48px]"
                    onClick={handleButtonClick}
                >
                    Apply Now
                </Button>
            </div>
        </div>
    );
};