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
    // get current location for dynamic rendering
    const location = useLocation();

    /**
     * custom icon component use useMemo to prevent re-render
     * @param {string} iconValue 
     * @param {string} className
     * @returns {JSX.Element}
     */
    const MyIcon = ({ iconValue, className }: { iconValue: string, className: string }) => {
        const Icon = useMemo<React.ReactNode>(() => {
            const src = iconValue as keyof typeof icon;
      
          return (
            <LocalIcon
              iconName={src}
              className={className}
            />
          );
        }, [iconValue]);
      
        return Icon;
    };

    /**
     * custom image component use useMemo to prevent re-render
     * @returns {JSX.Element}
     */
    const Image = useMemo<React.ReactNode>(() => {
        const src = ((): LocalImageProps["src"] => {
            return "login_banner";  
        })();

        return (
            <LocalImage
                src={src}
                className="w-[720px] h-[737px] object-cover object-center"
            />
        );
    }, [location.pathname]);

    /**
     * custom box component
     * @param {any} props
     * @returns {JSX.Element}
     */
    const box = (props: any) => {
        return (
            <div className="flex flex-col gap-5 w-[180px] h-[144px]">
                {MyIcon({ iconValue: props.icon, className: "w-[56px] h-[56px]" })}
                <div className="flex flex-col text-white">
                    <span className="text-xl font-medium leading-8">{props.number}</span>
                    <span className="text-ms opacity-70 leading-5">{props.title}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
            <div className="flex items-center justify-center ml-28">
                <div className="flex items-center justify-center">
                    {children}
                </div>
            </div>
            <div className="flex gap-2 items-center absolute left-28 top-5">
                <div>
                    {MyIcon({ iconValue: "briefcaseblue" , className: "w-10 h-10" })}
                </div>
                <span className="text-2xl font-semibold leading-10">
                    MyJob
                </span>
            </div>
            <div className="ml-auto relative">
                {Image}
                <div className="flex flex-col gap-[40px] absolute right-[70px] bottom-[30px]">
                    <span className="inline-block h-[80px] w-[500px] text-white text-4xl">
                        Over 1,75,324 candidates waiting for good employees.
                    </span>
                    <div className="flex">
                        {box({ icon: "briefcase_duotone", number: "1,75,324", title: "Live Job" })}
                        {box({ icon: "buildings_duotone", number: "97,354", title: "Companies" })}
                        {box({ icon: "briefcase_duotone", number: "7,532", title: "New Jobs" })}
                    </div>
                </div>
            </div>
        </div>
    );
};
