import { FoundingInfo } from "src/types";
import { useGetFoundingInfo } from "../../api/employer/founding-info"
import { FoundingInfoSchema, useUpdateFoundingInfo } from "../../api/employer/update-founding-info";
import { Button, Form, Input } from "src/components/ui";
import { useEffect, useState } from "react";



// Chuyển đổi giá trị sang yyyy-MM-dd
const formatDateForInput = (isoString: string) => {
  return isoString ? isoString.split('T')[0] : ""; // Lấy phần yyyy-MM-dd trước chữ 'T'
};

export const FoundingInfoForm = () => {
  const { data, isLoading } = useGetFoundingInfo();
  const update = useUpdateFoundingInfo();
  const [yearOfEstablishment, setYearOfEstablishment] = useState("");
  const [foundingInfo, setFoundingInfo] = useState<FoundingInfo>({
    industryType: "",
    teamSize: "",
    yearOfEstablishment: "",
    companyWebSite: "",
  });

  useEffect(() => {
    if (data?.data) {
      const foundingInfo = data?.data as FoundingInfo;
      setFoundingInfo({
        industryType: foundingInfo.industryType || "",
        teamSize: foundingInfo.teamSize || "",
        yearOfEstablishment: formatDateForInput(foundingInfo.yearOfEstablishment),
        companyWebSite: foundingInfo.companyWebSite || "",
      });
    } 
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFoundingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };  

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Form
        schema={FoundingInfoSchema}
        onSubmit={(data) => {
          update.mutate(data);
          console.log(data)
        }}
      >
        {(methods) => (
          <div className="flex flex-col mt-[32px] w-[800px]">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[14px] leading-5 mb-[8px]">
                  Industry Types
                </span>
                <select
                  value={foundingInfo.industryType}
                  id="industryType"
                  {...methods.register("industryType", { onChange: handleChange })}
                  className=" border border-primary/30 block w-[370px] h-[50px] rounded p-4"
                >
                  <option value="" disabled>Select...</option>
                  <option value="IT">IT</option>
                  <option value="Finance">Finance</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Technology">Technology</option>
                  <option value="Other">Other</option>
                </select>
                {methods.formState.errors.industryType && (
                  <p className="mt-2 text-sm text-red-600">
                    {methods.formState.errors.industryType.message}
                  </p>
                )}
              </div>
              <div>
                <span className="text-[14px] leading-5 mb-[8px]">
                  Team size
                </span>
                <select
                  value={foundingInfo.teamSize}
                  id="teamSize"
                  {...methods.register("teamSize", { onChange: handleChange })}
                  className=" border border-primary/30 block w-[370px] h-[50px] rounded p-4"
                >
                  <option value="" disabled>Select ...</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-100">51-100</option>
                  <option value="101-200">101-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500+">500+</option>
                </select>
                {methods.formState.errors.teamSize && (
                  <p className="mt-2 text-sm text-red-600">
                    {methods.formState.errors.teamSize.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex mt-[18px] justify-between items-center">
              <div>
                <span className="text-[14px] leading-5 mb-[8px]">
                  Year of Establishment
                </span>
                <Input
                  value={yearOfEstablishment}
                  label=""
                  onChange={(e) => setYearOfEstablishment(e.target.value)}
                  register={methods.register("yearOfEstablishment")}
                  error={methods.formState.errors.yearOfEstablishment}
                  type="date"
                  className="border border-primary/30 block w-[370px] h-[50px] rounded p-4"
                />
              </div>
              <div>
                <span className="text-[14px] leading-5 mb-[8px]">
                  Company Website
                </span>
                <Input
                  value={foundingInfo.companyWebSite}
                  label=""
                  register={methods.register("companyWebSite", { onChange: handleChange })}
                  error={methods.formState.errors.companyWebSite}
                  type="text"
                  className="border border-primary/30 block w-[370px] h-[50px] rounded p-4"
                />
              </div>
            </div>
            <Button
              className="w-[200px] h-[50px] mt-[20px]"
              type="submit"
            >
              Save Changes
            </Button>
          </div>
        )}
      </Form>
    </>
  )
}