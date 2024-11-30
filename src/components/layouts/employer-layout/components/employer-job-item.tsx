import { Link } from "react-router-dom";
import { LocalIcon } from "src/assets/icons";

export const JobList = ({ jobs }) => {
  return (
    <div className="list">
      {jobs.map((job) => (
        <div key={job.id} className="item flex items-center p-[20px] gap-5 border-b-[2px] border-b-">
          {/* Job Information */}
          <div className="w-[368px]">
            <div className="text-[16px] font-[500] mb-[8px]">{job.jobTitle}</div>
            <span className="text-[14px] text-[#767F8C] font-[400] leading-[20px]">
              {job.jobType} • {job.dateRemain <= 0 ? 0 : job.dateRemain} days remaining
            </span>
          </div>

          {/* Job Status */}
          <div className="w-[88px] flex items-center">
            <LocalIcon iconName={job.dateRemain > 0 ? "iconActive":"iconExpire"} height={20} width={20} />
            <span className="ml-[4px] text-[#0BA02C]">{job.dateRemain > 0 ? "Active":"Expire"}</span>
          </div>

          {/* Job Applications */}
          <div className="w-[184px] flex items-center">
            <LocalIcon iconName="iconUser" height={24} width={24} />
            <span className="ml-[8px] text-[#5E6670]">{job.numberOfApplications} Applications</span>
          </div>

          {/* View Applications Button */}
          <Link
            to={`/employer/profile/my-jobs/${job.id}`}
            className="cursor-pointer text-[16px] font-[600] text-[#0A65CC] leading-[24px] px-[24px] py-[12px] bg-[#F1F2F4] rounded-[5px] hover:bg-[#0A65CC] hover:text-[#FFF]"
          >
            View Applications
          </Link>
        </div>
      ))}
    </div>
  );
};
