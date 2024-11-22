import { NavListVertical } from "src/components/ui"

const NavItems = [
    {
        label: "Overview",
        path:"/employer/profile",
        activeIcon: "stack_blue",
        unactiveIcon: "stack_gray",
    },
    {
        label: "Post a Job",
        path:"/employer/profile/posted-jobs",
        activeIcon: "bookmark_blue",
        unactiveIcon: "bookmark_gray",
    },
    {
        label: "My Jobs",
        path:"/employer/profile/my-jobs",
        activeIcon: "logoImage",
        unactiveIcon: "briefcase_gray",
    },
    {
        label: "Settings",
        path:"/employer/profile/settings",
        activeIcon: "gear_blue",
        unactiveIcon: "gear_gray",
    },
]

export const EmployerNav = () => {
    return (
        <div className="flex flex-col gap-3 py-6 flex-shrink-0 h-[944px] border-r">
            <span className="w-[248px] text-[12px] text-[#9199A3] font-[500] leading-5 px-5">
            EMPLOYERS DASHBOARD
            </span>
            <NavListVertical items={NavItems}/>
        </div>
    )
}