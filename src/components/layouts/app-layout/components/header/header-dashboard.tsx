import { Link } from "src/components/ui/link/link";
export const AppHeaderDashBoard = () => {

    const menus = [
        "Home",
        "Find Job",
        "Employers",
        "Candidates",
        "Pricing Plans",
        "Customer Support"
    ];

    return (
        <>
            <div className="header">
                <div className="header__menu">
                    {menus.map((menuItem, menuIndex) => (
                        <Link  className="text-red-500" to={"/abc/"} key={menuIndex}>
                            {menuItem}
                        </Link>
                    ))}
                </div>
                <div className="header__contact">
                    Contac
                </div>
            </div>

        </>
    );
}