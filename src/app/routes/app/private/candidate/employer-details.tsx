import { LocalImage } from "src/assets/images";
import { EmployerBoxInfo, EmployerDescription, EmployerPosition, EmployerTitle } from "src/features/home/components/candidate";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useGetEmployerDetail } from "src/features/home/api/employer/employer";
import { CompanyDetails, job } from "src/types";
import { useGetJobFollowEmployer } from "src/features/home/api/candidate/jobs";

export const CompanyDetailsRoute = () => {
    const targetRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        targetRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const id = useParams().id;
    const { data } = useGetEmployerDetail(Number(id));
    const companyDetail = data?.data as CompanyDetails;

    const { data: companyPositions } = useGetJobFollowEmployer(Number(id));
    const jobs = companyPositions?.data as job[];

    return (companyDetail && jobs) ? (
        <div className="flex flex-col ">
            <div className="px-[50px] py-[24px] bg-[#F1F2F4] text-[18px] font-[500] leading-4">
                <span>Employer Detail</span>
            </div>
            <div className="relative ">
                <LocalImage src="banner" />
                <div className="flex flex-col px-[50px]">
                    <EmployerTitle handleScroll={handleScroll} companydetails={companyDetail} />
                    <div className="flex gap-[60px] flex-1 pt-[135px] pb-[100px]">
                        <EmployerDescription companydetails={companyDetail} />
                        <EmployerBoxInfo companydetails={companyDetail}/>
                    </div>
                    <EmployerPosition ref={targetRef} companyPositions={jobs}/>
                </div>
            </div>
        </div>
    ) : (
        <div>Loading...</div>   
    );
};
