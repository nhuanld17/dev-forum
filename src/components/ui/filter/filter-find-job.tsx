
type BoxFilterProps = {
    id: string;
    name: string;
    value: string;
    selectedValue: string;
    onChange: (name: string, value: string) => void;
};

const BoxFilter = (
    {   id,
        name, 
        value , 
        selectedValue,
        onChange
    }
    : BoxFilterProps
) => {
    return (
        <div>
            <div className="flex gap-3 text-[14px] text-[#495166] leading-5">
                <input
                    type="radio"
                    id={id}
                    name={name}
                    value={value}
                    className="w-[22px] h-[22px]"
                    checked={selectedValue === value}
                    onChange={(e) => onChange(name, e.target.value)}
                />
                <label htmlFor={id}>{value}</label>
            </div>
        </div>
    )
}

export const FilterFindJob = ({ filters, onFilterChange }: {
    filters: { jobType: string, experiences: string };
    onFilterChange: (name: string, value: string) => void;
  }) => {
    return (
        <div className="w-[424px] p-[32px] mt-24 rounded-[12px] border boder-[#E4E5E8]">
            <div className="flex flex-col gap-3  pb-[20px] pt-[20px] border-b-2">
                <span className="text-[20px] font-[500] leading-8">
                    Job Type
                </span>
                <BoxFilter id="1" name="jobType" value="Full Time"
                selectedValue={filters.jobType}
                onChange={onFilterChange}
                />
                <BoxFilter id="2" name="jobType" value="Part Time"
                selectedValue={filters.jobType}
                onChange={onFilterChange}
                />
                <BoxFilter id="3" name="jobType" value="Remote"
                selectedValue={filters.jobType}
                onChange={onFilterChange}
                />
                <BoxFilter id="4" name="jobType" value="Internship"
                selectedValue={filters.jobType}
                onChange={onFilterChange}
                />
            </div>
            <div className="flex flex-col gap-3  pb-[20px] pt-[20px]">
                <span className="text-[20px] font-[500] leading-8">
                    Experiences
                </span>
                <BoxFilter id="5" name="experiences" value="1 year"
                selectedValue={filters.experiences}
                onChange={onFilterChange}
                />
                <BoxFilter id="6" name="experiences" value="1 - 2 years"
                selectedValue={filters.experiences}
                onChange={onFilterChange}
                />
                <BoxFilter id="7" name="experiences" value="2 - 3 years"
                selectedValue={filters.experiences}
                onChange={onFilterChange}
                />
                <BoxFilter id="8" name="experiences" value="~ 5 years"
                selectedValue={filters.experiences}
                onChange={onFilterChange}
                />
            </div>
        </div>  
    )
}