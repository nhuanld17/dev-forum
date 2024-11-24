import { CompanyDetails } from "src/types";
import { Button } from "src/components/ui";
import { LocalIcon } from "src/assets/icons";

export const EmployerTitle = ({
    companydetails,
    handleScroll,
}: {
    companydetails: CompanyDetails;
    handleScroll: () => void;
}) => {
    return (
        <div className="border absolute w-[93%] top-[220px] border-[#E4E5E8] rounded-xl flex justify-between items-center p-10 bg-white">
            <div className="flex gap-6">
                <img
                    src={companydetails.profilePictureLink}
                    alt="logo company"
                    className="w-[80px] h-[80px] rounded-lg"
                />
                <div className="flex flex-col gap-[10px]">
                    <span className="text-[24px] font-[500] leading-8">
                        {companydetails.companyName}
                    </span>
                    <span className="text-[16px] text-[#5E6670] leading-6">
                        Information Technology (IT)
                    </span>
                </div>
            </div>
            <Button
                children={"View Open Position"}
                endIcon={<LocalIcon iconName="arrow_right_white" />}
                className="w-[248px] h-[56px]"
                onClick={handleScroll}
            />
        </div>
    );
};
