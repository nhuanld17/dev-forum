import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui";
import { job } from "src/types";
import { useNavigate } from "react-router-dom";

const Box = ({ iconName, title }: { iconName: string, title: string }) => {
    return (
        <div className="flex gap-[6px] items-center">
            <LocalIcon iconName={iconName} height={22} width={22} />
            <span className="text-[14px] leading-5 text-[#5E6670]">
                {title}
            </span>
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
            className="flex w-[1020px] h-[100px] p-8 pr-[41px] transition-all duration-500 ease-in-out items-center justify-between border rounded-[12px] hover:bg-gradient-to-r from-[#fff2da] to-[#FFF] hover:border-[1px] hover:scale-[1.01] hover:border-[blue]"
        >
            <div className="flex gap-[20px] items-center justify-center">
                <img src={jobProps.profilePictureLink} alt="" className="w-[68px] h-[68px] rounded-[6px]"/>
                <div className="flex flex-col gap-[12px]">
                    <div className="flex gap-[8px]">
                        <span className="text-[18px] font-[500] leading-7">
                            {jobProps.title}
                        </span>
                        <span className="px-[12px] py-[3px] rounded-[52px] bg-[#FCEEEE] text-[14px] text-[#E05151] font-[500] leading-5">
                            {jobProps.tags}
                        </span>
                        <span className="px-[12px] py-[3px] rounded-[52px] bg-[#E7F0FA] text-[14px] text-[#0A65CC] font-[500] leading-5">
                            {jobProps.jobType}
                        </span>
                    </div>
                    <div className="flex items-center gap-[16px]">
                        <Box iconName="location_gray" title="Viet Nam"/>
                        <Box iconName="dollar_gray" title={String(jobProps.maxSalary)}/>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-[10px]">
                <Button 
                    variant={"transparent"}
                    startIcon={<LocalIcon iconName="bookmark_gray"/>}
                />
                <Button 
                    endIcon={<LocalIcon iconName="fi_arrow_right"/>}
                    className="h-[48px]"
                    onClick={handleButtonClick}
                >
                    Apply Now
                </Button>
            </div>
        </div>
    );
};
