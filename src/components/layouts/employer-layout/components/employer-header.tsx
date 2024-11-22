import { Link } from "src/components/ui/link/link";
import { LocalIcon } from "src/assets/icons";
import { NavListHorizontal } from "src/components/ui";

export const EmployeeHeader = () => {
    const menus = [
        {
            label: "Home",
            path: `/employer`
        },
        {
            label: "Dashboard",
            path: `/employer/profile`
        },
        {
            label: "My jobs",
            path: `/employer/my-jobs`
        },
        {
            label: "Applications",
            path: `/employer/applications`
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
                    <div>

                    </div>
                    <div className="flex items-center gap-6"> 
                        <LocalIcon iconName="bell_ringing"/>
                        <Link to={`/employer/profile`}>
                            <LocalIcon iconName="candidate_avatar" width={48} height={48} className="hover:scale-125"/>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};