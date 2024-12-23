
type BoxFilterProps = {
    id: string;
    name: string;
    value: string;
};

const BoxFilter = ({ id, name, value }: BoxFilterProps) => {
    return (
        <div>
            <div className="flex gap-3 text-[14px] text-[#495166] leading-5">
                <input
                    type="radio"
                    id={id}
                    name={name}
                    value={value}
                    className="w-[22px] h-[22px]"
                />
                <label >{value}</label>
            </div>
        </div>
    )
}

export const FilterFindCanidate = () => {
    return (
        <div className="w-[424px] p-[32px] mt-24 rounded-[12px] border boder-[#E4E5E8]">
            <div className="flex flex-col gap-3  pb-[20px] pt-[20px] border-b-2">
                <span className="text-[20px] font-[500] leading-8">
                    Job Type
                </span>
                <BoxFilter id="1" name="job type" value="Full Time"/>
                <BoxFilter id="2" name="job type" value="Part Time"/>
                <BoxFilter id="3" name="job type" value="Remote"/>
                <BoxFilter id="4" name="job type" value="Internship"/>
            </div>
            <div className="flex flex-col gap-3  pb-[20px] pt-[20px]">
                <span className="text-[20px] font-[500] leading-8">
                    Experiences
                </span>
                <BoxFilter id="1" name="job type" value="Remote"/>
                <BoxFilter id="2" name="job type" value="Remote"/>
                <BoxFilter id="3" name="job type" value="Remote"/>
                <BoxFilter id="4" name="job type" value="Remote"/>
            </div>
        </div>  
    )
}