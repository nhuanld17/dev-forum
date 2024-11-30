
import { useState } from 'react';
import { JobList } from 'src/components/layouts/employer-layout/components/employer-job-item';
import { useGetAllCompanyJobs } from "src/features/home/api/employer/jobs";

export const MyJobRoute = () => {
    const [sortDirection, setSortDirection] = useState('desc');
    const [page, setPage] = useState(1);

    const { data, isLoading, isError } = useGetAllCompanyJobs(page, 10, 'id', sortDirection);

    // Lấy tổng số việc làm từ dữ liệu trả về
    const totalJobs = data?.data.meta.total;
    const totalPages = data?.data.meta.pages; // Tổng số trang

    // Hàm thay đổi hướng sắp xếp
    const handleSortChange = (e) => {
        setSortDirection(e.target.value);
    };

    // Hàm thay đổi trang
    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <>
            <div className="flex items-center justify-between mb-[24px]">
                <h1>My Job ({totalJobs})</h1>
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

            <div className="h-[38px] px-5 py-2.5 bg-[#f1f2f4] rounded justify-center items-center gap-5 inline-flex">
                <div className="w-[368px] text-[#474c54] text-xs font-normal leading-[18px]">JOBS</div>
                <div className="w-[88px] text-[#474c54] text-xs font-normal leading-[18px]">STATUS</div>
                <div className="w-[184px] text-[#474c54] text-xs font-normal leading-[18px]">APPLICATIONS</div>
                <div className="w-[220px] text-[#474c54] text-xs font-normal leading-[18px]">ACTIONS</div>
            </div>

            {/* Hiển thị danh sách công việc */}
            {data && <JobList jobs={data.data.result} />}

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
        </>
    );
};