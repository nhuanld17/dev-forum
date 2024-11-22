import { NavListHorizontal} from "src/components/ui"

const NavItems = [
    {
        label: "Company Info",
        path:"/employer/profile/settings",
        activeIcon: "user_blue",
        unactiveIcon: "user_gray",
    },
    {
        label: "Founding Info",
        path:"/employer/profile/settings/founding-info",
        activeIcon: "usercircle_blue",
        unactiveIcon: "usercircle_gray",
    },
    {
        label: "Social Media Profile",
        path:"/employer/profile/settings/social-links",
        activeIcon: "global_blue",
        unactiveIcon: "global_gray",
    },
    {
        label: "Account Setting",
        path:"/employer/profile/settings/account-setting",
        activeIcon: "gear_blue",
        unactiveIcon: "gear_gray",
    },
]

export const EmployerSettingNav = () => {
    return (
        <div className="flex flex-col gap-3 flex-shrink-0">
            <span className="text-[24px] font-[500] leading-8">Setting</span>
            <NavListHorizontal items={NavItems}/>
        </div>
    );
};
