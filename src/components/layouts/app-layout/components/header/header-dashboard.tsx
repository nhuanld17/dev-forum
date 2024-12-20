import { Link } from "src/components/ui/link/link";
import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui";
import { useNavigate } from "react-router-dom";

export const AppHeaderDashBoard = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`auth`);
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleClick();
    };

    const menus = [
        {label: "Home", path:"/"},
        {label: "Find Job", path:"#find-job"},
        {label: "Category", path:"#polular-category"},
        {label: "Vacancy", path:"#popular-vacancy"},
        {label: "Top Company", path:"#top-company"},
        {label: "About Us", path:"#about-us"}

    ];

    return (    
        <>
            <header id="header" className="fixed top-0 left-0 w-full z-[1000]   " >
                <div className="header-top px-[50px] flex h-[48px] bg-[#F1F2F4] items-center justify-between">
                    <div className="header__menu flex justify-between">
                        {menus.map((menuItem, menuIndex) => (
                            <a
                            className="inline-flex hover:opacity-70 text-[14px] text-[#5E6670] mx-[24px] h-[48px] items-center last:mr-0 first:ml-0 first:text-[#0A65CC] hover:border-b-[3px] hover:border-[#0A65CC] hover:text-[#0A65CC]"
                            href={menuItem.path}
                            key={menuIndex}
                        >
                            {menuItem.label}
                        </a>
                        ))}
                    </div>
                    <div className="header__contact flex items-center justify-between">
                        <LocalIcon iconName="phoneCall" height={24} width={24} />
                        <span className="text-black px-[10px] text-[14px]">+84 342043637</span>
                        <LocalIcon iconName="flagImage" height={24} width={24} />
                    </div>
                </div>
                <div className="header-bottom py-[20px] px-[50px] border-b-[1px] bg-white border-b-[#dddddd] flex justify-between items-center">
                    <div className="Logo flex items-center">
                        <LocalIcon iconName="logoImage" height={40} width={40} />
                        <Link className="ml-[10px] text-[24px] font-semibold text-[#18191C] hover:text-black" to={"/"}>MyJob</Link>
                    </div>
                    <div className="search-bar flex w-[450px] py-[9px] px-[24px] border-[1.75px] border-[#E4E5E8] rounded-[5px] focus-within:border-blue-500">
                        <LocalIcon iconName="searchIcon" height={24} width={24} />
                        <form action="#" method="GET" className="ml-5 flex-1">
                            <input type="text" name="key-word" placeholder="Job title, keyword, company" className="outline-none w-[100%]" />
                        </form>
                    </div>
                    <div className="button-group">
                        <Button onClick={handleButtonClick} variant="ghost" size="md" className="mr-[10px]" >Sign In</Button>
                        <Button onClick={handleButtonClick}variant="filled" size="md" >Post A Job</Button>
                    </div>
                </div>
            </header>
        </>
    );
}