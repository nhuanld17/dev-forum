



type BoxFilterProps = {
  id: string;
  name: string;
  value: string;
  title: string;
}

const BoxFilter = ({
  props,
  selectedValue,
  onChange
}: {
  props: BoxFilterProps;
  selectedValue: string;
  onChange: (name: string, value: string) => void;
}) => {
  return (
    <div className="flex gap-3 text-[14px] text-[#495166] leading-5">
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        checked={selectedValue === props.value}
        onChange={(e) => onChange(props.name, e.target.value)}
        className="w-[22px] h-[22px]"
      />
      <label htmlFor={props.id}>{props.title}</label>
    </div>
  );
};


export const FindCandidateFilter = ({ filters, onFilterChange }: {
  filters: { experiences: string, education: string; gender: string };
  onFilterChange: (name: string, value: string) => void;
}) => {
  return (
    <div className=" w-[360px] border rounded-lg px-[32px] py-[24px] ">
      <div className="flex flex-col gap-3  pb-[20px] pt-[20px] border-b-2">
        <span className="text-[20px] font-[500] leading-8">
          Experiences
        </span>
        <div className="flex flex-col gap-4">
          <BoxFilter
            props={{ id: "1", name: "experiences", value: "Less than 1 year", title: "Less than 1 year" }}
            selectedValue={filters.experiences}
            onChange={onFilterChange}
          />
          <BoxFilter
            props={{ id: "2", name: "experiences", value: "1-2 years", title: "1-2 years" }}
            selectedValue={filters.experiences}
            onChange={onFilterChange}
          />
          <BoxFilter
            props={{ id: "3", name: "experiences", value: "2-3 years", title: "2-3 years" }}
            selectedValue={filters.experiences}
            onChange={onFilterChange}
          />
          <BoxFilter
            props={{ id: "4", name: "experiences", value: "3-4 years", title: "3-4 years" }}
            selectedValue={filters.experiences}
            onChange={onFilterChange}
          />
          <BoxFilter
            props={{ id: "5", name: "experiences", value: "4-5 years", title: "4-5 years" }}
            selectedValue={filters.experiences}
            onChange={onFilterChange}
          />
          <BoxFilter
            props={{ id: "6", name: "experiences", value: "More than 5 years", title: "More than 5 years" }}
            selectedValue={filters.experiences}
            onChange={onFilterChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 pb-[20px] pt-[20px] border-b-2">
        <span className="text-[20px] font-[500] leading-8">
          Education
        </span>
        <div className="flex flex-col gap-4">
          <BoxFilter
            props={{ id: "7", name: "education", value: "Graduate", title: "Graduate" }}
            selectedValue={filters.education}
            onChange={onFilterChange}
          />
          <BoxFilter
            props={{ id: "8", name: "education", value: "Master", title: "Master" }}
            selectedValue={filters.education}
            onChange={onFilterChange}
          />
          <BoxFilter
            props={{ id: "9", name: "education", value: "12/12", title: "12/12" }}
            selectedValue={filters.education}
            onChange={onFilterChange}
          />
          <BoxFilter
            props={{ id: "10", name: "education", value: "College", title: "College" }}
            selectedValue={filters.education}
            onChange={onFilterChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3  pb-[20px] pt-[20px]">
        <span className="text-[20px] font-[500] leading-8">
          Gender
        </span>
        <div className="flex flex-col gap-4">
          <BoxFilter
            props={{ id: "11", name: "gender", value: "0", title: "Male" }}
            selectedValue={filters.gender}
            onChange={onFilterChange}
          />
          <BoxFilter
            props={{ id: "12", name: "gender", value: "1", title: "Female" }}
            selectedValue={filters.gender}
            onChange={onFilterChange}
          />
          <BoxFilter
            props={{ id: "13", name: "gender", value: "2", title: "Others" }}
            selectedValue={filters.gender}
            onChange={onFilterChange}
          />
        </div>
      </div>
    </div>
  )
}
