import { Link } from "react-router-dom";
import { LocalIcon } from "src/assets/icons";
import { JobList } from "src/components/layouts/employer-layout/components/employer-job-item";
import { useGetAllCompanyJobs } from "src/features/home/api/employer/jobs";

export const OverviewRoute = () => {

	const { data } = useGetAllCompanyJobs(1, 5, 'id', 'desc');

	let numberOfApplications = 0;

	if (data) {
		console.log(data.data.result);
		data.data.result.forEach((job) => {
			numberOfApplications += job.numberOfApplications;
		});
	}

	return (
		<>
			<div className="overview">
				<h1 className="text-[18px] text-[500] leading-[28px]">
					Have a nice day !
				</h1>
				<p className="text-[14px] text-[#767F8C] text-[400] leading-[20px] mb-[24px]">
					Here is your daily activities and applications
				</p>
				<div className="box-group flex">
					<div className="box flex mr-[24px] pl-[24px] pt-[20px] pb-[20px] pr-[20px] bg-[#E7F0FA] rounded-[8px]">
						<div>
							<div className="text-[24px] font-[600] leading-[32px] w-[200px]">{data?.data.meta.total}</div>
							<span className="w-[200px] text-[14px] opacity-80 text-[#18191C]">Jobs Posted</span>
						</div>
						<div className="p-[16px] bg-[#fff] rounded-[5px]">
							<LocalIcon iconName="iconBag" height={32} width={32} />
						</div>
					</div>
					<div className="box flex mr-[24px] pl-[24px] pt-[20px] pb-[20px] pr-[20px] bg-[#FFF6E6] rounded-[8px]">
						<div>
							<div className="text-[24px] font-[600] leading-[32px] w-[200px]">2.517</div>
							<span className="w-[200px] text-[14px] opacity-80 text-[#18191C]">Saved Candidates</span>
						</div>
						<div className="p-[16px] bg-[#fff] rounded-[5px]">
							<LocalIcon iconName="iconCardId" height={32} width={32} />
						</div>
					</div>
				</div>
				<div className="recent-post mt-[22px]">
					<div className="w-[984px] h-6 justify-between items-center inline-flex mb-[20px]">
						<div className="text-[#18191c] text-[16px] font-[500] leading-[24px]">Recently Posted Jobs</div>
						<div className="justify-center items-center gap-2 flex">
							<Link to={"/employer/profile/my-jobs"} className="text-[#767f8c] text-base font-medium font-['Inter'] leading-normal">View all</Link>
							<div className="w-6 h-6 relative" />
						</div>
					</div>
					<div className="h-[38px] px-5 py-2.5 bg-[#f1f2f4] rounded justify-center items-center gap-5 inline-flex">
						<div className="w-[368px] text-[#474c54] text-xs font-normal leading-[18px]">JOBS</div>
						<div className="w-[88px] text-[#474c54] text-xs font-normal leading-[18px]">STATUS</div>
						<div className="w-[184px] text-[#474c54] text-xs font-normal leading-[18px]">APPLICATIONS</div>
						<div className="w-[220px] text-[#474c54] text-xs font-normal leading-[18px]">ACTIONS</div>
					</div>
					{data && <JobList jobs={data.data.result} />}
				</div>
			</div>
		</>
	)
}
