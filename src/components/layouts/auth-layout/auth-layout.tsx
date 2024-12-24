import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { LocalIcon, icon} from "src/assets/icons";
import { LocalImage, LocalImageProps } from "src/assets/images";

/**
 * AuthLayout is a layout for authentication pages
 * @param {React.ReactNode} children
 * @returns {JSX.Element}
 */
export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();

    const MyIcon = ({ iconValue, className }: { iconValue: string; className: string }) => {
        const Icon = useMemo<React.ReactNode>(() => {
            const src = iconValue as keyof typeof icon;

            return <LocalIcon iconName={src} className={className} />;
        }, [iconValue]);

        return Icon;
    };

    const Image = useMemo<React.ReactNode>(() => {
        const src = ((): LocalImageProps["src"] => "login_banner")();

        return (
            <LocalImage
                src={src}
                className="hidden lg:block w-full lg:w-[720px] lg:h-[737px] object-cover object-center"
            />
        );
    }, [location.pathname]);

    const box = (props: any) => {
        return (
            <div className="flex flex-col gap-3 w-[150px] lg:w-[180px] h-[100px] lg:h-[144px]">
                {MyIcon({ iconValue: props.icon, className: "w-[40px] lg:w-[56px] h-[40px] lg:h-[56px]" })}
                <div className="flex flex-col text-white">
                    <span className="text-lg lg:text-xl font-medium leading-6 lg:leading-8">{props.number}</span>
                    <span className="text-sm lg:text-base opacity-70 leading-4 lg:leading-5">{props.title}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 relative">
            {/* Left Section */}
            <div className="flex flex-col items-center justify-center px-4 py-8 lg:ml-28">
                <div className="flex items-center justify-center">{children}</div>
            </div>

            {/* Header */}
            <div className="absolute left-4 top-4 lg:left-28 lg:top-5 flex items-center gap-2">
                <div>{MyIcon({ iconValue: "briefcaseblue", className: "w-8 h-8 lg:w-10 lg:h-10" })}</div>
                <span className="text-base lg:text-2xl font-semibold leading-8 lg:leading-10 hidden sm:block">
                    MyJob
                </span>
            </div>

            {/* Right Section */}
            <div className="hidden lg:block ml-auto relative">
                {Image}
                <div className="absolute right-4 lg:right-[70px] bottom-4 lg:bottom-[30px] flex flex-col gap-4 lg:gap-[40px]">
                    <span className="text-white text-sm lg:text-4xl w-[250px] lg:w-[500px] hidden md:inline-block">
                        Over 1,75,324 candidates waiting for good employees.
                    </span>
                    <div className="flex flex-wrap gap-4 lg:gap-8">
                        {box({ icon: "briefcase_duotone", number: "1,75,324", title: "Live Job" })}
                        {box({ icon: "buildings_duotone", number: "97,354", title: "Companies" })}
                        {box({ icon: "briefcase_duotone", number: "7,532", title: "New Jobs" })}
                    </div>
                </div>
            </div>
        </div>
    );
};
