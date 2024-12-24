import { cva } from "class-variance-authority";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "../link";
import { LocalIcon } from "src/assets/icons";

const navListVariants = cva("flex items-center gap-4 pt-2 pb-2 px-5 hover:scale-95", {
    variants: {
        variant: {
            active: "text-[#0A65CC] font-[500] border-b-[3px] border-[#0A65CC]",
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
    activeIcon?: string;
    unactiveIcon?: string;
};

type NavListProps = {
    items: NavItem[];
};

/**
 * How to use: NavListHorizontal({ items: NavItems })
 * @param param0
 * @returns {JSX.Element}
 */
export const NavListHorizontal: React.FC<NavListProps> = ({ items }: NavListProps) => {
    const location = useLocation();

    const links = useMemo(() => {
        return items.map((item) => {
            const isActive =
                location.pathname === item.path ||
                (location.pathname.startsWith(item.path) &&
                    (item.path === "/candidate/profile" || item.path === "/employer/profile"));
            return (
                <li key={item.path} className="">
                    <Link
                        to={item.path}
                        className={isActive ? navListVariants({ variant: "active" }) : navListVariants({ variant: "unactive" })}
                    >
                        {item.activeIcon != null ? (
                            <LocalIcon iconName={`${isActive ? item.activeIcon : item.unactiveIcon}`} />
                        ) : null}

                        <span>{item.label}</span>
                    </Link>
                </li>
            );
        });
    }, [items, location.pathname]);

    return <ul className="flex gap-3 border-b-[2px]">{links}</ul>;
};
