import { useState } from "react";
import { useGetAllJobs } from "src/features/home/api/candidate/jobs";
import { JobBox } from "src/features/home/components/candidate/job-box";
export const FindJobRoute = () => {
    
    const [page, setPage] = useState(1);
    const [sortDirection, setSortDirection] = useState('desc');
    const { data } = useGetAllJobs('', page, sortDirection);

    console.log(data);
    const jobs = data?.data;

    // Lấy tổng số việc làm từ dữ liệu trả về
    const totalJobs = data?.data.meta.total;
    const totalPages = data?.data.meta.pages; // Tổng số trang

    // Hàm thay đổi hướng sắp xếp
    const handleSortChange = (e) => {
        setSortDirection(e.target.value);
    };

    // Hàm thay đổi trang
    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <div className="flex flex-col gap-[24px] py-[40px] items-center">
            <div className="flex items-center justify-between w-[60%] mb-[24px]">
                <h1>Result ({totalJobs})</h1>
                <select
                    className="text-[16px] font-[400] leading-[24px] text-[#5E6670] px-[18px] py-[12px] outline-none border-[1px] border-[#E4E5E8] rounded-[4px] appearance: none"
                    name="job"
                    id="job"
                    value={sortDirection}
                    onChange={handleSortChange}>
                    <option value="desc">Latest</option>
                    <option value="asc">Oldest</option>
                </select>
            </div>

            {/* Hiển thị danh sách công việc */}
            {jobs && jobs.result.map((job) => <JobBox key={job.id} jobProps={job} />)}


            {/* Phân trang */}
            <div className="flex justify-center mt-4 mb-[10px]">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className="px-4 py-2 border rounded-l-lg text-[#5E6670] bg-[#E4E5E8] disabled:opacity-50">
                    Prev
                </button>
                <span className="px-4 py-2 text-[#5E6670]">{page} / {totalPages}</span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                    className="px-4 py-2 border rounded-r-lg text-[#5E6670] bg-[#E4E5E8] disabled:opacity-50">
                    Next
                </button>
            </div>
        </div>
    );
};
