import { Link } from "src/components/ui/link/link";
import { LocalIcon } from "src/assets/icons";
import { NavListHorizontal, useOverlay } from "src/components/ui";
import { useGetCandidateBasic } from "src/features/home/api/candidate/personal";
import { SearchJob } from "src/app/routes/app/private/candidate/search";

export const CandidateHeader = () => {
    const {data: candidate, isLoading} = useGetCandidateBasic()
    const {display} = useOverlay();

    if (isLoading) return <div>Loading...</div>;

    const menus = [
        {
            label: "Home",
            path: `/candidate`
        },
        {
            label: "Find Employers",
            path: `/candidate/employers`
        },
        {
            label: "Dashboard",
            path: `/candidate/profile`
        },
        {
            label: "Job Alerts",
            path: `/candidate/job-alerts`
        },
        {
            label: "Customer Support",
            path: `/candidate/customer-support`
        }
    ];

    return (
        <>
            <header className="border-b">
                <nav className="header-top px-[50px] flex h-[48px] bg-[#F1F2F4] items-center justify-between">
                    <div className="header__menu flex justify-between">
                        <NavListHorizontal items={menus}/>
                    </div>
                    <div className="header__contact flex items-center justify-between">
                        <LocalIcon iconName="phoneCall" height={24} width={24}/>
                        <span className="text-black px-[10px] text-[14px]">+84 342043637</span>
                        <LocalIcon iconName="flagImage" height={24} width={24}/>
                    </div>
                </nav>
                <div className="flex items-center justify-between px-[50px] py-[20px]">
                    <div className="flex items-center gap-2">
                        <LocalIcon iconName="logoImage" width={40} height={40}/>
                        <span className="text-black text-[24px] leading-[40px] font-semibold">
                            My Job
                        </span>
                    </div>  
                    <div className="flex w-[35%] pl-[30px] p-[10px] gap-[20px] border-2 rounded-lg">
                        <LocalIcon iconName="searchIcon"/>
                        <input onClick={() =>display(<SearchJob/>)} type="text" name="" id="" className="outline-none" placeholder="Job tittle, keyword..."/>
                    </div>
                    <div className="flex items-center gap-6"> 
                        <LocalIcon iconName="bell_ringing"/>
                        <Link to={`/candidate/profile`}>
                            <img src={candidate?.data.pictureProfileLink} alt="" className="h-[48px] w-[48px] hover:scale-125 rounded-[999px]"/>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};
