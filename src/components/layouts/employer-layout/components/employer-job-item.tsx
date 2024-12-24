import { Link } from "react-router-dom";
import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui";
import { useDeleteJobById } from "src/features/home/api/employer/delete-job";
import { JobCompany } from "src/types";

export const JobList = ({ jobs }) => {

  const deleteJob = useDeleteJobById();

  const handleClickDelete = (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this job?");
    if (confirmed) {
      deleteJob.mutate(id);
      window.location.reload(); 
    } 
  }

  return (
    <div className="list">
      {jobs.map((job: JobCompany) => (
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

          {/* Edit job */}
          <Link to={`/employer/profile/my-jobs/${job.id}/edit`}>
            <LocalIcon iconName="iconEdit" className="cursor-pointer" height={24} width={24} />
          </Link>

          {/* Xóa job */}
          <LocalIcon
            iconName="iconDelete" className="cursor-pointer"
            height={24}
            width={24}
            onClick={() => handleClickDelete(job.id)} 
          />
        </div>
      ))}
    </div>
  );
};
