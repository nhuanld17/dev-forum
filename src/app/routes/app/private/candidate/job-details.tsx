import { BoxInfo } from "src/features/home/components/candidate/box-info";
import { JobDescription } from "src/features/home/components/candidate/job-description";
import { JobOverview } from "src/features/home/components/candidate/job-overview";
import { JobDetailTitle } from "src/features/home/components/candidate/job-title";

const CompanyProfile = {
    id: 1,
    companyName: "Tech Innovations Ltd.",
    phone: "+1 234 567 890",
    website: "https://www.instagram.com/",
    email: "contact@techinnovations.com",
    dateEstablished: "2015-06-20",
    profilePictureLink: "https://cdn.tgdd.vn/2020/03/GameApp/Instagram-200x200.jpg",
    teamSize: "150"
};

const JobDetails = {
    id: 101,
    title: "Senior Software Engineer",
    tags: "Feature",
    postAt: "2024-11-01",
    expirationDate: "2024-12-01",
    education: "Graduation",
    maxSalary: 120000,
    jobType: "Full-time",
    experience: "5+ years",
    decription: "Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus sit amet ligula ullamcorper, pulvinar ante id, tristique erat. Quisque sit amet aliquam urna. Maecenas blandit felis id massa sodales finibus. Integer bibendum eu nulla eu sollicitudin. Sed lobortis diam tincidunt accumsan faucibus. Quisque blandit augue quis turpis auctor, dapibus euismod ante ultricies. Ut non felis lacinia turpis feugiat euismod at id magna. Sed ut orci arcu. Suspendisse sollicitudin faucibus aliquet.",
    responesibility: "Lead software design and development; mentor junior developers; ensure the quality of software; collaborate with cross-functional teams; collaborate with cross-functional teams; collaborate with cross-functional teams; collaborate with cross-functional teams."
};


export const JobdetailRoute = () => {
    return (
        <div className="flex flex-col">
            <div className="px-[50px] py-[24px] bg-[#F1F2F4] text-[18px] font-[500] leading-4">
                <span>Job Detail</span>
            </div>
            <div className="px-[50px]">
                <JobDetailTitle jobdetails={JobDetails} companyInfo={CompanyProfile} />
            </div>
            <div className="flex px-[50px] gap-[50px]">
                <JobDescription jobdetails={JobDetails} />
                <div className="flex flex-col flex-1 gap-6 pb-14">
                    <JobOverview jobdetails={JobDetails} />
                    <BoxInfo companyinfo={CompanyProfile}  />
                </div>
            </div>
        </div>
    );
};
