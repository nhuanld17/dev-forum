import { useState } from "react";
import { LocalIcon } from "src/assets/icons";
import { Button, useOverlay } from "src/components/ui";
import { FindCandidateFilter } from "src/components/ui/filter/find-candidate-filter";
import { OverlayCandidateProfile } from "src/components/ui/overlay/components/company-overlay";
import { useGetAllCandidatesIntro } from "src/features/home/api/employer/candidate-intro";
import { CandidateIntro } from "src/types";


export const BoxCandidateIntro = ({ candidate }: { candidate: CandidateIntro }) => {
    const { display, dismiss } = useOverlay();
    return (
        <div className="flex justify-between items-center rounded-xl border p-[15px] w-[840px] hover:bg-gradient-to-r transition-all duration-500 ease-in-out from-[#fff2da] to-[#FFF] hover:border-[1px] hover:scale-[1.01] hover:border-[blue] hover:">
            <div className="flex items-center gap-[20px] flex-shrink-0">
                <img src={candidate.pictureProfileLink} alt="avatar candidate" className="w-[76px] h-[76px] rounded-lg" />
                <div className="flex flex-col justify-center items-start gap-[10px]">
                    <div className="flex flex-col gap-[3px]">
                        <span className="text-[18px] font-[500] leading-7">
                            {candidate.fullName}
                        </span>
                        <span className="text-[14px] text-[#5E6670]">
                            {candidate.title}
                        </span>
                    </div>
                    <div className="flex items-center gap-[16px] text-[14px] text-[#5E6670]">
                        <span className="flex">
                            <LocalIcon iconName="location_gray" width={22} height={22} />
                            {candidate.location}
                        </span>
                        <span className="flex">
                            <LocalIcon iconName="dollar_gray" width={22} height={22} />
                            {candidate.experience}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Button variant={"transparent"} startIcon={<LocalIcon iconName="bookmark_blue" />}>

                </Button>
                <Button
                    endIcon={<LocalIcon iconName="fi_arrow_right" />}
                    onClick={() => { display(<OverlayCandidateProfile id={candidate.id} />) }}
                >
                    View Profile
                </Button>
            </div>
        </div>
    )
}

export const FindCandidateRoute = () => {

    const [sortDirection, setSortDirection] = useState('desc');
    const [page, setPage] = useState(1);

    const [filters, setFilters] = useState({
        experiences: '',
        education: '',
        gender: ''
    });
    const { data, isLoading } = useGetAllCandidatesIntro('', page, sortDirection, filters.experiences, filters.education, filters.gender);

    const handleFilterChange = (name: string, value: string) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleDeselect = () => {
        setFilters({
            experiences: '',
            education: '',
            gender: ''
        });
    }

    const candidates = data?.data as CandidateIntro[];

    candidates?.result.map((candidate: CandidateIntro) => {
        console.log(candidate);
    });

    if (isLoading) return <div>Loading...</div>;

    // Lấy tổng số việc làm từ dữ liệu trả về
    const totalCandidates = data?.data.meta.total;
    const totalPages = data?.data.meta.pages; // Tổng số trang

    // Hàm thay đổi hướng sắp xếp
    const handleSortChange = (e: React.MouseEvent) => {
        setSortDirection(e.target.value);
    };

    // Hàm thay đổi trang
    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };



    return (
        <div className="pt-[20px] flex flex-row gap-3 items-start justify-center pb-[80px]">
            <div>
                <FindCandidateFilter filters={filters} onFilterChange={handleFilterChange} />
                <Button
                    className="mt-[25px] w-[150px] h-[56px] bg-[#FF6B00] text-[#FFFFFF] rounded-[8px] focus:outline-none"
                    type="submit"
                    onClick={handleDeselect}
                >
                    Deselect
                </Button>
            </div>
            <div className="pt-[40px] w-[840px] flex-col gap-3 justify-center">
                <div className="flex items-center justify-between mb-[10px] w-full">
                    <h1>Total ({totalCandidates})</h1>
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
                {
                    candidates ? candidates.result.map((candidate) => (
                        <BoxCandidateIntro candidate={candidate} key={candidate.id} />)) : <div>Null</div>
                }
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
        </div>
    );
}