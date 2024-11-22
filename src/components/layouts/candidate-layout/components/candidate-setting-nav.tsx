import { NavListHorizontal} from "src/components/ui"

const NavItems = [
    {
        label: "Personal",
        path:"/candidate/profile/settings",
        activeIcon: "user_blue",
        unactiveIcon: "user_gray",
    },
    {
        label: "Profile",
        path:"/candidate/profile/settings/profile",
        activeIcon: "usercircle_blue",
        unactiveIcon: "usercircle_gray",
    },
    {
        label: "Social Links",
        path:"/candidate/profile/settings/social-links",
        activeIcon: "global_blue",
        unactiveIcon: "global_gray",
    },
    {
        label: "Account Setting",
        path:"/candidate/profile/settings/account-setting",
        activeIcon: "gear_blue",
        unactiveIcon: "gear_gray",
    },
]

export const CandidateSettingNav = () => {
    return (
        <div className="flex flex-col gap-3 flex-shrink-0">
            <span className="text-[24px] font-[500] leading-8">Setting</span>
            <NavListHorizontal items={NavItems}/>
        </div>
    );
};
