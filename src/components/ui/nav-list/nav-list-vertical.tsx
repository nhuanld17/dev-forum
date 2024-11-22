import { cva } from "class-variance-authority";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "../link";
import { LocalIcon } from "src/assets/icons";

const navListVariants = cva("flex items-center gap-4 pt-2 pb-2 pl-5 w-full", {
    variants: {
        variant: {
            active: "text-[#0A65CC] font-[500] bg-[#E7F0FA] border-l-4 border-[#0A65CC]", 
            unactive: "text-gray-500 hover:text-gray-700",
        },
        size: {
            default: "text-[14px]",
        },
    },
    defaultVariants: {
        variant: "unactive",
        size: "default",
    },
});

type NavItem = {
    label: string;
    path: string;
    activeIcon: String;
    unactiveIcon: String;
};

type NavListProps = {
    items: NavItem[];
};

/**
 * How to use: NavListVertical({ items: NavItems })
 * @param param0 
 * @returns {JSX.Element}
 */
export const NavListVertical: React.FC<NavListProps> = ({ items }: NavListProps) => {
    const location = useLocation();

    const links = useMemo(() => {
        return items.map((item) => {
            const isActive = location.pathname == (item.path) || 
                (location.pathname.startsWith(item.path) && 
                (item.path == "/candidate/profile/settings" || item.path == "/employer/profile/settings"));
            return (
                <li key={item.path}>
                    <Link
                        to={item.path}
                        className={isActive ? navListVariants({ variant: "active" }) : navListVariants({ variant: "unactive" })}
                    >
                        <LocalIcon iconName={`${isActive ? item.activeIcon : item.unactiveIcon}`}/>
                        <span>{item.label}</span>
                    </Link>
                </li>
            );
        });
    }, [items, location.pathname]);

    return <ul>{links}</ul>;
};
