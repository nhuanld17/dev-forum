import { useState } from "react";
import { LocalIcon } from "src/assets/icons";
import { useOverlay } from "src/components/ui";
import { useGetAllCandidatesIntro } from "src/features/home/api/employer/candidate-intro";
import { BoxCandidateIntro } from "./find-candidate";

export const SearchCandidate = () => {
    const { dismiss } = useOverlay();
    const { data } = useGetAllCandidatesIntro("", 1, "desc");

    const candidates = data?.data || [];
    const [searchText, setSearchText] = useState("");

   
    const filteredCandidates = candidates.filter((candidates) =>
        candidates.title.toLowerCase().includes(searchText.toLowerCase())
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
            {searchText.trim() && (
                <div className="flex flex-col gap-[24px] py-[40px] items-center">
                    {filteredCandidates.length > 0 ? (
                        filteredCandidates.slice().reverse().map((candidates) => (
                            <BoxCandidateIntro candidate={candidates} />
                        ))
                    ) : (
                        <p>No jobs available</p>
                    )}
                </div>
            )}
        </div>
    );
};
