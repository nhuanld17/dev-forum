import { useParams } from "react-router-dom";
import { useGetJobDetail } from "src/features/home/api/candidate/jobs";
import { JobDescription } from "src/features/home/components/candidate/job-description";
import { JobOverview } from "src/features/home/components/candidate/job-overview";
import { JobDetailTitle } from "src/features/home/components/candidate/job-title";
import { BoxInfo } from "src/features/home/components/candidate/box-info";
import { jobDetail } from "src/types";

export const JobdetailRoute = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetJobDetail(Number(id));

    const jobDetails = data?.data as jobDetail;
    if (isLoading) {
        return <div>Đang tải chi tiết công việc...</div>;
    } else {
        return (
            <div className="flex flex-col">
                <div className="px-[50px] py-[24px] bg-[#F1F2F4] text-[18px] font-[500] leading-4">
                    <span>Job Detail</span>
                </div>
                <div className="px-[50px]">
                    <JobDetailTitle jobdetails={jobDetails} />
                </div>
                <div className="flex px-[50px] gap-[50px]">
                    <JobDescription jobdetails={jobDetails} />
                    <div className="flex flex-col flex-1 gap-6 pb-14">
                        <JobOverview jobdetails={jobDetails} />
                        <BoxInfo jobdetails={jobDetails} />
                    </div>  
                </div>
            </div>
        );
    }
};