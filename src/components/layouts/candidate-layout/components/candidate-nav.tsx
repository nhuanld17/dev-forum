import { NavListVertical } from "src/components/ui"

const NavItems = [
    {
        label: "Overview",
        path:"/candidate/profile",
        activeIcon: "stack_blue",
        unactiveIcon: "stack_gray",
    },
    {
        label: "Applied Jobs",
        path:"/candidate/profile/applied-jobs",
        activeIcon: "logoImage",
        unactiveIcon: "briefcase_gray",
    },
    {
        label: "Favorite Jobs",
        path:"/candidate/profile/favorite-jobs",
        activeIcon: "bookmark_blue",
        unactiveIcon: "bookmark_gray",
    },
    {
        label: "Settings",
        path:"/candidate/profile/settings",
        activeIcon: "gear_blue",
        unactiveIcon: "gear_gray",
    },
    {
        label: "Logout",
        path:"/auth",
        activeIcon: "usercircle_gray",
        unactiveIcon: "usercircle_gray",
    }
]

export const CandidateNav = () => {
    return (
        <div className="flex flex-col gap-3 py-6 flex-shrink-0 h-[944px] border-r">
            <span className="w-[248px] text-[12px] text-[#9199A3] font-[500] leading-5 px-5">
                CANDIDATE DASHBOARD
            </span>
            <NavListVertical items={NavItems}/>
        </div>
    )
}