
import { useState } from "react";
import { Button } from "src/components/ui";
import { FilterFindJob } from "src/components/ui/filter/filter-find-job";
import { useGetAllJobs } from "src/features/home/api/candidate/jobs";
import { JobBox } from "src/features/home/components/candidate/job-box";
export const FindJobRoute = () => {

    const [page, setPage] = useState(1);
    const [sortDirection, setSortDirection] = useState('desc');

    const [filter, setFilters] = useState({
        jobType: '',
        experiences: ''
    });

    const { data, isLoading } = useGetAllJobs('', page, sortDirection, filter.experiences, filter.jobType);

    const handleFilterChange = (name: string, value: string) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleDeselect = () => {
        setFilters({
            jobType: '',
            experiences: '',
        });
    }

    const jobs = data?.data;
    const totalPages = data?.data.meta.pages;

    const handleSortChange = (e) => {
        setSortDirection(e.target.value);
    };

    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <div className="flex gap-6 justify-center items-start lg:flex-row lg:gap-6 md:flex-col md:gap-4">
            <div>
                <FilterFindJob filters={filter} onFilterChange={handleFilterChange} />
                <Button
                    className="mt-[25px] w-[150px] h-[56px] bg-[#FF6B00] text-[#FFFFFF] rounded-[8px] focus:outline-none"
                    type="submit"
                    onClick={handleDeselect}
                >
                    Deselect
                </Button>
            </div>
            <div className="flex flex-col gap-[24px] py-[40px] items-center">
                <div className="flex w-full justify-end">
                    <select
                        className="text-[16px] font-[400] leading-[24px] text-[#5E6670] px-[18px] py-[12px] outline-none border-[1px] border-[#E4E5E8] rounded-[4px] lg:appearance-none"
                        name="job"
                        id="job"
                        value={sortDirection}
                        onChange={handleSortChange}
                    >
                        <option value="desc">Latest</option>
                        <option value="asc">Oldest</option>
                    </select>
                </div>
                {jobs && jobs.result.map((job) => (
                    <JobBox key={job.id} jobProps={job} />
                ))}
                <div className="flex justify-center mt-4 mb-[10px]">
                    <button
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 1}
                        className="px-4 py-2 border rounded-l-lg text-[#5E6670] bg-[#E4E5E8] disabled:opacity-50"
                    >
                        Prev
                    </button>
                    <span className="px-4 py-2 text-[#5E6670]">
                        {page} / {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(page + 1)}
                        disabled={page === totalPages}
                        className="px-4 py-2 border rounded-r-lg text-[#5E6670] bg-[#E4E5E8] disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>

    );
};
