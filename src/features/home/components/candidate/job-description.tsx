import { JobDetails } from "src/types";

export const JobDescription = ({jobdetails}: {jobdetails: JobDetails}) => {
    return (
        <div className="w-[51%] flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <span className="text-[18px] font-[500] leading-7">
                    Job Description
                </span>
                <span className="text-[16] text-[#5E6670] leading-6">
                    {jobdetails.decription}
                </span>
            </div>
            <div className="flex flex-col gap-4">
                <span className="text-[18px] font-[500] leading-7">
                    Responsibilities
                </span>
                <div className="flex flex-col gap-2">
                    {
                        jobdetails.responesibility.split(';').map(part => part.trim()).filter(Boolean).map(
                            (part, index) => (
                                <span 
                                    className="text-[16] text-[#5E6670] leading-6"
                                    key={index}
                                >
                                    • {part}
                                </span>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
};
