import { CandidateInfo } from "src/types"
import { icon, LocalIcon } from "src/assets/icons";
import { Button } from 'src/components/ui';
import { cn } from "src/utils";
import { Link } from 'src/components/ui/link/link';
import { useGetCandidateIntroDetail } from "src/features/home/api/employer/candidate-intro";


type BoxInfoProps = {
    image: keyof typeof icon;
    title: string;
    value: string;
    className?: string;
};


const BoxInfo = ({ image, title, value, className }: BoxInfoProps) => {
    return (
        <div className={cn("flex flex-col gap-3", className)}>
            <LocalIcon iconName={image} height={24} width={24} />
            <div className="flex flex-col">
                <span className="text-[12px] text-[#767F8C] leading-6">{title}</span>
                <span className="text-[14px] font-[500] leading-6 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">{value}</span>
            </div>
        </div>
    );
};

export const OverlayCandidateProfile = (
    { id }: { id: number }
) => {
    const { data, isLoading } = useGetCandidateIntroDetail(id);

    if (isLoading) return <div>Loading...</div>;

    const candidateDetail = data?.data as CandidateInfo;

    return (
        <>
            <div className="animate-fade-in">
                <div className="bg-white w-[1024px] h-[700px] overflow-y-scroll custom-scrollbar rounded-xl">
                    <div className="p-12 flex flex-col gap-10">
                        <div className="title-overlay flex justify-between items-center">
                            <div className="flex items-center gap-6">
                                <img src={candidateDetail.pictureProfileLink} alt="logo candidate" className="h-[80px] w-[80px] rounded-[999px]" />
                                <div className="flex flex-col gap-2">
                                    <span className="text-[24px] font-[500] leading-8">{candidateDetail.fullName}</span>
                                    <span className="text-[16px] text-[#767F8C] leading-6">{candidateDetail.title}</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Button variant={"ghost"}
                                    startIcon={<LocalIcon iconName="bookmark_blue" />}
                                    className="bg-[#E7F0FA] h-[48px]"
                                />
                                <Button
                                    startIcon={<LocalIcon iconName="envelope_white" />}
                                    className="h-[48px]"
                                >
                                    Send Mail
                                </Button>
                            </div>
                        </div>
                        <div className="main flex gap-[72px]">
                            <div className="main-left w-[536px]">
                                <div className="main-left-top flex flex-col gap-6 pb-8 border-b-2">
                                    <span className="text-[18px] font-[500] leading-4">BIOGRAPHY</span>
                                    <span className="text-[16px] text-[#5E6670] leading-6">{candidateDetail.bio}</span>
                                </div>
                                <div className="flex flex-col gap-[17px] pt-8">
                                    <span className="text-[14px] font-[500] leading-5">Follow me Social Media</span>
                                    <div className="flex gap-3">
                                        <Link to={candidateDetail.facebookLink}>
                                            <LocalIcon iconName="facebook_link" height={48} width={48} />
                                        </Link>
                                        <Link to={candidateDetail.twitterLink}>
                                            <LocalIcon iconName="twitter_link" height={48} width={48} />
                                        </Link>
                                        <Link to={candidateDetail.linkedLink}>
                                            <LocalIcon iconName="linkedin_link" height={48} width={48} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="main-right w-[312px] flex flex-col gap-6">
                                <div className="main-right-top flex flex-col border-2 rounded-lg p-6 gap-6">
                                    <div className="flex gap-5">
                                        <BoxInfo image={"cake"} title={"DATE OF BIRTH"} value={candidateDetail.birthDate} className="w-[47%]" />
                                        <BoxInfo image={"usercircle_blue"} title={"GENDER"} value={(candidateDetail.gender == 0) ? "Male" : "Female"} className="w-[47%]" />
                                    </div>
                                    <div className="flex gap-5">
                                        <BoxInfo image={"stack_blue"} title={"EXPERIENCE"} value={candidateDetail.experience} className="w-[47%]" />
                                        <BoxInfo image={"graduation_cap"} title={"EDUCATIONS"} value={candidateDetail.education} className="w-[47%]" />
                                    </div>
                                </div>
                                <div className="main-right-bottom flex flex-col p-6 border-2 rounded-lg gap-6">
                                    <span>Download My Resume</span>
                                    <div className="flex justify-between">
                                        <div className="flex fap-3">
                                            <LocalIcon iconName="file_text" height={48} width={48} />
                                            <div className="flex flex-col">
                                                <span className="text-[12px] text-[#767F8C]">{candidateDetail.fullName}</span>
                                                <span>PDF</span>
                                            </div>
                                        </div>
                                        <Button variant={"ghost"}>
                                            <a
                                                href={candidateDetail.resumeLink}
                                                download={candidateDetail.resumeLink}
                                                className="flex items-center gap-2"
                                            >
                                                <LocalIcon iconName="download" height={24} width={24} />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                                <div className="main-right-bottom flex flex-col p-6 border-2 rounded-lg gap-6">
                                    <span>Contact Information</span>
                                    <BoxInfo image={"global_blue"} title={"MY WEBSITE"} value={candidateDetail.portfolio} className="flex-row items-center" />
                                    <BoxInfo image={"location"} title={"LOCATION"} value={candidateDetail.location} className="flex-row items-center" />
                                    <BoxInfo image={"phone"} title={"PHONE"} value={candidateDetail.phoneNumber} className="flex-row items-center" />
                                    <BoxInfo image={"envelope"} title={"EMAIL ADRESS"} value={candidateDetail.email} className="flex-row items-center" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
