import { FilterFindCanidate } from "src/components/ui/filterr/filter-find-candidate";
import { useGetAllJobs } from "src/features/home/api/candidate/jobs";
import { JobBox } from "src/features/home/components/candidate/job-box";
export const FindJobRoute = () => {
    const { data } = useGetAllJobs();

    const jobs = data?.data;

    return (
        <div className="flex gap-6 justify-center items-center py-[40px]">
            <FilterFindCanidate />
            <div className="flex flex-col gap-[24px] items-center">
                {Array.isArray(jobs) && jobs.length > 0 ? (
                    jobs.slice().reverse().map((job) => <JobBox key={job.id} jobProps={job} />)
                ) : (
                    <p>No jobs available</p>
                )}
            </div>
        </div>
    );
};
