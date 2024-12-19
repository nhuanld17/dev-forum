import { useState } from "react";
import { LocalIcon } from "src/assets/icons";
import { useOverlay } from "src/components/ui";
import { useGetAllJobs } from "src/features/home/api/candidate/jobs";
import { JobBox } from "src/features/home/components/candidate/job-box";

export const SearchJob = () => {
    const { dismiss } = useOverlay();
    const { data } = useGetAllJobs();

    const jobs = data?.data || [];
    const [searchText, setSearchText] = useState("");

    // Lọc danh sách công việc dựa trên searchText
    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div onClick={dismiss} className="w-screen h-screen inset-0 flex flex-col bg-gray-500/40 pt-[40px] items-center backdrop-blur-md">
            <div
                className="flex w-[35%] pl-[30px] p-[10px] gap-[20px] border-2 rounded-lg bg-white"
                onClick={(e) => e.stopPropagation()}
            >
                <LocalIcon iconName="searchIcon" />
                <input
                    type="text"
                    className="outline-none"
                    placeholder="Job title, keyword..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
            {/* Hiển thị danh sách công việc khi searchText không rỗng */}
            {searchText.trim() && (
                <div className="flex flex-col gap-[24px] py-[40px] items-center">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.slice().reverse().map((job) => (
                            <JobBox key={job.id} jobProps={job} />
                        ))
                    ) : (
                        <p>No jobs available</p>
                    )}
                </div>
            )}
        </div>
    );
};
