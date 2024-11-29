import { useGetAllJobs } from "src/features/home/api/candidate/jobs";
import { JobBox } from "src/features/home/components/candidate/job-box";

export const FindJobRoute = () => {
    const {data} = useGetAllJobs();

    const  jobs = data?.data;
    return (
        <div className="flex flex-col gap-[24px] py-[40px] items-center">
            {Array.isArray(jobs) ? (
                jobs.map((job) => <JobBox key={job.id} jobProps={job} />)
            ) : (
                <p>No jobs available</p>
            )}
        </div>
    );
};  

