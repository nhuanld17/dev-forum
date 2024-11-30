import { jobDetail } from "src/types";
import { Link } from "src/components/ui";
import { Button } from "src/components/ui/buttons";
import { LocalIcon } from "src/assets/icons";
import { useOverlay } from "src/components/ui";
import { ApplyJobOverlay } from "src/components/ui/overlay/components/candidate-overlay";
import { usePostWishList } from "../../api/candidate/wish-list";
import { useParams } from "react-router-dom";

export const JobDetailTitle = ({ jobdetails }: { jobdetails: jobDetail }) => {
    const { display } = useOverlay();
    const update = usePostWishList();
    const idJob = useParams().id as string;

    return (
        <div className="flex justify-between py-8">
            <div className="jobtitle-left flex items-center gap-6">
                <img 
                    src={jobdetails.profilePictureLink} 
                    alt="logo company" 
                    className="w-[96px] h-[96px] rounded-[999px]" 
                />
                <div className="flex flex-col gap-[13px]">
                    <div className="flex gap-2">
                        <span className="text-[24px] font-[500] leading-8">
                            {jobdetails.title}
                        </span>
                        <span className="py-[3px] px-3 rounded-[52px] bg-[#FFEDED] text-[14px] text-[#FF4F4F] ">
                            {jobdetails.tags}
                        </span>
                        <span className="py-[3px] px-3 rounded-[52px] bg-[#E8F1FF] text-[14px] text-[#06F]">
                            {jobdetails.jobType}
                        </span>
                    </div>
                    <div className="flex gap-5 text-[16px] text-[#474C54] leading-6">
                        <Link to={jobdetails.website} className="flex items-center gap-[6px]">
                            <LocalIcon iconName="link" height={20} width={20}/>
                            <span>
                                {jobdetails.website}
                            </span>
                        </Link>
                        <div className="flex items-center gap-[6px]">
                            <LocalIcon iconName="phone" height={20} width={20}/>
                            <span>
                                {jobdetails.phone}
                            </span>
                        </div>
                        <div className="flex items-center gap-[6px] ">
                            <LocalIcon iconName="envelope" height={20} width={20}/>
                            <span>
                                {jobdetails.email}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jobtitle-right flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <Button 
                        variant={"ghost"} 
                        endIcon={<LocalIcon iconName="bookmark_blue"/>}
                        className="w-[56px] h-[56px]"
                        onClick={() => update.mutate(idJob)}
                    />
                    <Button 
                        children={"Apply Now"} 
                        endIcon={<LocalIcon iconName="arrow_right_white"/>}
                        className="w-[248px] h-[56px]"
                        onClick={() => display(<ApplyJobOverlay />)}
                    />
                </div>
                <div className="text-[14px] leading-5 ml-auto">
                    <span className="text-[#767F8C]">
                        Job expire in:
                    </span>
                    <span className="text-[#E05151]">
                        {jobdetails.expirationDate}
                    </span>
                </div>
            </div>
        </div>
    );
}