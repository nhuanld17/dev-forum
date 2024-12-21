import { useState } from "react";
import { LocalIcon } from "src/assets/icons";
import { useOverlay } from "src/components/ui";
import { useGetAllJobs } from "src/features/home/api/candidate/jobs";
import { JobBox } from "src/features/home/components/candidate/job-box";

export const SearchJob = () => {
    const [sortDirection, setSortDirection] = useState("desc");
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const { dismiss } = useOverlay();
    const { data } = useGetAllJobs(searchText, page, sortDirection);

    const jobs = data?.data || [];

    // Lấy tổng số việc làm từ dữ liệu trả về
    const totalJobs = data?.data.meta.total;
    const totalPages = data?.data.meta.pages; // Tổng số trang

    // Hàm thay đổi hướng sắp xếp
    const handleSortChange = (e: React.MouseEvent) => {
        e.stopPropagation(); // Ngăn sự kiện click lan lên phần tử cha
        setSortDirection(e.target.value);
    };

    const handleSelectClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Ngăn sự kiện click lan lên phần tử cha
    };

    // Hàm thay đổi trang
    const handlePageChange = (e: React.MouseEvent, newPage: number) => {
        e.stopPropagation(); // Ngăn sự kiện click lan lên phần tử cha
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };


    return (
        <div onClick={dismiss} className="fixed w-screen h-screen inset-0 flex flex-col bg-gray-500/40 backdrop-blur-md overflow-hidden">
            <div className="flex flex-col items-center h-full w-full overflow-y-auto pt-[40px]">
                {/* Search input container - fixed at top */}
                <div
                    className="flex w-[35%] pl-[30px] p-[10px] gap-[20px] border-2 rounded-lg bg-white"
                    onClick={(e) => e.stopPropagation()}
                >
                    <LocalIcon iconName="searchIcon" />
                    <input
                        type="text"
                        className="outline-none flex-1"
                        placeholder="Job title, keyword..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>

                {/* Results header with sort */}
                <div className="flex items-center justify-between w-[60%] mb-[24px] mt-[20px]">
                    <h1>Result ({totalJobs})</h1>
                    <select
                        className="text-[16px] font-[400] leading-[24px] text-[#5E6670] px-[18px] py-[12px] outline-none border-[1px] border-[#E4E5E8] rounded-[4px]"
                        value={sortDirection}
                        onClick={handleSelectClick}
                        onChange={handleSortChange}
                    >
                        <option value="desc">Latest</option>
                        <option value="asc">Oldest</option>
                    </select>
                </div>

                {/* Scrollable results container */}
                <div className="flex flex-col gap-[24px] py-[40px] items-center w-full overflow-y-auto">
                    {jobs?.result?.length > 0 ? (
                        jobs.result.map((job) => <JobBox key={job.id} jobProps={job} />)
                    ) : (
                        <div>No jobs found</div>
                    )}
                </div>

                {/* Phân trang */}
                <div className="flex justify-center mt-4 mb-[10px]">
                    <button
                        onClick={(e) => handlePageChange(e, page - 1)}
                        disabled={page === 1}
                        className="px-4 py-2 border rounded-l-lg text-[#5E6670] bg-[#E4E5E8] disabled:opacity-50">
                        Prev
                    </button>
                    <span className="px-4 py-2 text-[#5E6670]">{page} / {totalPages}</span>
                    <button
                        onClick={(e) => handlePageChange(e, page + 1)}
                        disabled={page === totalPages}
                        className="px-4 py-2 border rounded-r-lg text-[#5E6670] bg-[#E4E5E8] disabled:opacity-50">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
