import { jobApply } from "src/types";
import { useNavigate } from "react-router-dom";
import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui";
import { useGetJobFavorite } from "src/features/home/api/candidate/jobs";

const FavoriteJob = ({ jobfavorite }: { jobfavorite: jobApply }) => {
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/candidate/job-details/${id}`);
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleClick(jobfavorite.id);
    };


    return (
        <div className="p-[20px] flex items-center justify-between rounded-lg border-b-2 hover:border-2 hover:border-[#0A65CC] hover:bg-gradient-to-r from-[#fff2da] to-[#FFF] ">
            <div className="flex items-center gap-4">
                <img src={jobfavorite.profilePictureLink} alt="logo company" className="w-[56px] h-[56px] rounded" />
                <div className="flex flex-col gap-[10px]">
                    <div className="flex gap-2">
                        <span className="text-[16px] font-[500] leading-6">
                            {jobfavorite.title}
                        </span>
                        <span className="px-[12px] py-[3px] rounded-[52px] bg-[#E7F0FA] text-[14px] text-[#0A65CC] leading-4">
                            {jobfavorite.jobType}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <span className="flex items-center text-[14px] text-[#5E6670] leading-5">
                            <LocalIcon iconName="location_gray" height={20} width={20} />
                            Viet Nam
                        </span>
                        <span className="flex items-center text-[14px] text-[#5E6670] leading-5">
                            <LocalIcon iconName="dollar_gray" height={20} width={20} />
                            {jobfavorite.maxSalary}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Button
                    variant={"transparent"}
                    endIcon={<LocalIcon iconName="bookmark_blue" />}
                >

                </Button>
                <Button
                    onClick={handleButtonClick}
                    endIcon={<LocalIcon iconName="fi_arrow_right" height={20} width={20} />}
                >
                    Apply Now
                </Button>
            </div>
        </div>
    );
};

export const FavoriteJobRoute = () => {
    const { data, isLoading } = useGetJobFavorite();
    if (isLoading) {
        return <div>Loading...</div>;
    }
    const jobFavorites = data?.data as jobApply[];

    return (
        <div className="flex flex-col gap-3 w-[1000px]">
            <span className="text-[18px] font-[500] leading-7">
                Favorite Jobs
            </span>
            {jobFavorites.map((job) => (
                <FavoriteJob jobfavorite={job} />
            ))}
        </div>
    )
}