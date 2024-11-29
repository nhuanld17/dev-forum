import { ApplyJob } from "./overview"
import { useGetJobApply } from "src/features/home/api/candidate/jobs";
import { jobApply } from "src/types";

export const ApplyJobRoute = () => {
    const {data, isLoading} = useGetJobApply();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    const jobApplys = data?.data as jobApply[];

    return (
        <div className="w-[1000px] flex flex-col gap-3">
            <span className="text-[18px] font-[500] leading-7">
                Applied Jobs
            </span>
            <div className="flex justify-between px-[20px] py-[10px] rounded bg-[#F1F2F4]">
                <span className="text-[#474C54]">
                    job
                </span>
                <span className="text-[#474C54]">
                    Action
                </span>
            </div>
            <div>
                {jobApplys.map((job) => (
                    <ApplyJob jobapply={job} />
                ))}
            </div>
        </div>
    )
}
