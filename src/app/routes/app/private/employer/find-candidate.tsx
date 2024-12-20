import { LocalIcon } from "src/assets/icons";
import { Button, useOverlay } from "src/components/ui";
import { OverlayCandidateProfile } from "src/components/ui/overlay/components/company-overlay";
import { useGetAllCandidatesIntro } from "src/features/home/api/employer/candidate-intro";
import { CandidateIntro } from "src/types";


export const BoxCandidateIntro = ({ candidate }: { candidate: CandidateIntro }) => {
    const { display, dismiss } = useOverlay();
    return (
        <div className="flex justify-between items-center rounded-xl border p-[15px] w-[840px] hover:bg-gradient-to-r transition-all duration-500 ease-in-out from-[#fff2da] to-[#FFF] hover:border-[1px] hover:scale-[1.01] hover:border-[blue] hover:">
            <div className="flex items-center gap-[20px] flex-shrink-0">
                <img src={candidate.pictureProfileLink} alt="avatar candidate" className="w-[76px] h-[76px] rounded-lg" />
                <div className="flex flex-col justify-center items-start gap-[10px]">
                    <div className="flex flex-col gap-[3px]">
                        <span className="text-[18px] font-[500] leading-7">
                            {candidate.fullName}
                        </span>
                        <span className="text-[14px] text-[#5E6670]">
                            {candidate.title}
                        </span>
                    </div>
                    <div className="flex items-center gap-[16px] text-[14px] text-[#5E6670]">
                        <span className="flex">
                            <LocalIcon iconName="location_gray" width={22} height={22} />
                            {candidate.location}
                        </span>
                        <span className="flex">
                            <LocalIcon iconName="dollar_gray" width={22} height={22} />
                            {candidate.experience}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Button variant={"transparent"} startIcon={<LocalIcon iconName="bookmark_blue" />}>

                </Button>
                <Button
                    endIcon={<LocalIcon iconName="fi_arrow_right" />}
                    onClick={() =>{display(<OverlayCandidateProfile id={candidate.id} />)}}
                >
                    View Profile
                </Button>
            </div>
        </div>
    )
}

export const FindCandidateRoute = () => {
    const { data, isLoading } = useGetAllCandidatesIntro();
    if (isLoading) return <div>Loading...</div>

    const candidates = data?.data as CandidateIntro[];

    return (
        <div className="pt-[40px] flex gap-3 justify-center items-center pb-[40px]">
            <div className=" w-[360px] border rounded-lg px-[32px] py-[24px] ">
                <div className="flex flex-col gap-3  pb-[20px] pt-[20px] border-b-2">
                    <span className="text-[20px] font-[500] leading-8">
                        Experiences
                    </span>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-3 text-[14px] text-[#495166] leading-5">
                            <input
                                type="radio"
                                id="gender-female"
                                name="gender"
                                value="1"
                                className="w-[22px] h-[22px]"
                            />
                            <label >~ 5 years</label>
                        </div>
                        <div className="flex gap-3 text-[14px] text-[#495166] leading-5">
                            <input
                                type="radio"
                                id="gender-male"
                                name="gender"
                                value="0"
                                className="w-[22px] h-[22px]"
                            />
                            <label >3 - 4 years</label>
                        </div>
                        <div className="flex gap-3 text-[14px] text-[#495166] leading-5">
                            <input
                                type="radio"
                                id="gender-male"
                                name="gender"
                                value="0"
                                className="w-[22px] h-[22px]"
                            />
                            <label >2 - 3 years</label>
                        </div>
                        <div className="flex gap-3 text-[14px] text-[#495166] leading-5">
                            <input
                                type="radio"
                                id="gender-male"
                                name="gender"
                                value="0"
                                className="w-[22px] h-[22px]"
                            />
                            <label >~ 1 year</label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 pb-[20px] pt-[20px] border-b-2">
                    <span className="text-[20px] font-[500] leading-8">
                        Education
                    </span>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-3 text-[14px] text-[#495166] leading-5">
                            <input
                                type="radio"
                                id="gender-male"
                                name="gender"
                                value="0"
                                className="w-[22px] h-[22px]"
                            />
                            <label >Graduation</label>
                        </div>
                        <div className="flex gap-3 text-[14px] text-[#495166] leading-5">
                            <input
                                type="radio"
                                id="gender-male"
                                name="gender"
                                value="0"
                                className="w-[22px] h-[22px]"
                            />
                            <label >High School</label>
                        </div>
                        <div className="flex gap-3 text-[14px] text-[#495166] leading-5">
                            <input
                                type="radio"
                                id="gender-male"
                                name="gender"
                                value="0"
                                className="w-[22px] h-[22px]"
                            />
                            <label >12/12</label>
                        </div>
                        <div className="flex gap-3 text-[14px] text-[#495166] leading-5">
                            <input
                                type="radio"
                                id="gender-male"
                                name="gender"
                                value="0"
                                className="w-[22px] h-[22px]"
                            />
                            <label >Master</label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3  pb-[20px] pt-[20px]">
                    <span className="text-[20px] font-[500] leading-8">
                        Gender
                    </span>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-3 text-[14px] text-[#495166] leading-5">
                            <input
                                type="radio"
                                id="gender-female"
                                name="gender"
                                value="1"
                                className="w-[22px] h-[22px]"
                            />
                            <label >Female</label>
                        </div>
                        <div className="flex gap-3 text-[14px] text-[#495166] leading-5">
                            <input
                                type="radio"
                                id="gender-male"
                                name="gender"
                                value="0"
                                className="w-[22px] h-[22px]"
                            />
                            <label >Male</label>
                        </div>
                        <div className="flex gap-3 text-[14px] text-[#495166] leading-5">
                            <input
                                type="radio"
                                id="gender-male"
                                name="gender"
                                value="0"
                                className="w-[22px] h-[22px]"
                            />
                            <label >Other</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[40px] flex flex-col gap-3 justify-center items-center   ">
                {
                    candidates ? candidates.map((candidate) => (
                        <BoxCandidateIntro candidate={candidate} key={candidate.id} />)) : <div>Null</div>
                }
            </div>
        </div>
    );
}