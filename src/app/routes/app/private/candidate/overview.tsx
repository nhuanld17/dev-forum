import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui";
import { useNavigate } from "react-router-dom";
import { Link } from "src/components/ui";

export const FunFactBox = ({title, iconName, bgColor}:{ title:string, iconName:string, bgColor:string}) => {
    return (
        <div className={`w-[28%] flex gap-6 p-5 items-center justify-between rounded-lg ${bgColor}`}>
            <div className="flex flex-col">
                <span className="text-[24px] font-[600] leading-8">
                    {Math.floor(Math.random() * 1000)}
                </span>
                <span className="text-[14px] leading-5 opacity-80">
                    {title}
                </span>
            </div>
            <LocalIcon iconName={iconName} width={64} height={64}/>
        </div>
    )
};

export const OverviewRoute = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`settings`);
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleClick();
    };


    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <span className="text-[18px] font-[500] leading-7">
                    Hello, Esther Howard
                </span>
                <span className="text-[14px] text-[#767F8C] leading-5">
                    Here is your daily activities and job alerts
                </span>
            </div>
            <div className="flex gap-6">
                <FunFactBox title="Applied jobs" iconName="briefcase_duotone_blue" bgColor="bg-[#E7F0FA]"/>
                <FunFactBox title="Favorite jobs" iconName="bookmark_duotone_yellow" bgColor="bg-[#FFF6E6]"/>
                <FunFactBox title="Job Alerts" iconName="bellring_duotone_green" bgColor="bg-[#E7F6EA]"/>
            </div>
            <div className="w-[88.3%] flex p-[32px] justify-between items-center rounded-lg bg-[#E05151]">
                <div className="flex justify-center items-center gap-6">
                    <LocalIcon iconName="candidate_avatar" width={64} height={64}/>
                    <div className="flex flex-col justify-start gap-1 text-white">
                        <span className="text-[18px] font-[500] leading-7">
                            Your profile editing is not completed.
                        </span>
                        <span className="text-[14px] leading-5">
                            Complete your profile editing & build your custom Resume
                        </span>
                    </div>
                </div>
                <Button 
                    endIcon={<LocalIcon iconName="arrow_right_red" width={24} height={24}/>}
                    className="bg-white text-[#E05151] px-[24px] py-[12px]"
                    onClick={handleButtonClick}
                >
                    Edit Profile
                </Button>
            </div>
            <div className="w-[88.3%]">
                <div className="flex justify-between font-[500] leading-6">
                    <span>
                        Recently Applied
                    </span>
                    <Link 
                        to="/candidate/profile/applied-jobs" 
                        className="text-[#767F8C] flex gap-2 items-center"
                    >
                        View all
                        <LocalIcon iconName="arrow_right_gray" width={24} height={24}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}