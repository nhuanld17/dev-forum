import { Link } from "react-router-dom";
import { LocalIcon } from "src/assets/icons";

type BoxLinkProps = {
    nameLink: string;
}

/**
 * how to use: <BoxLink title="Quick Link" props={[{nameLink: "About"},...]} />
 * @param param0  
 * @returns {JSX.Element}
 */
const BoxLink = ({ title, props }: { title: String, props: BoxLinkProps[] }) => {
    return (
        <div className="w-[200px] flex flex-col text-white gap-2">
            <span className="text-xl">{title}</span>
            {props.map(prop => (
                <Link to="/auth" key={prop.nameLink} className="text-gray-500 hover:text-blue-500 hover:underline">
                    {prop.nameLink}
                </Link>
            ))}
        </div>
    );
}

/**
 * create footer dashboard 
 * how to use: <AppFooterDashBoard />
 * @returns {JSX.Element}
 */
export const AppFooterDashBoard = () => {

    return (
        <div className="bg-[#18191C]">
            <div className="flex py-[80px] px-[50px] justify-between">
                <div className="flex flex-col gap-[24px] text-white">
                    <div className="flex gap-[8px] items-center">
                        <LocalIcon iconName="briefcase_transparent" width={40} height={40} />
                        <span>MyJob</span>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <p className="text-gray-500">Call now:<span className="text-white"> (319) 555-0115</span></p>
                        <p className="text-gray-500 w-[80%]">6391 Elgin St. Celina, Delaware 10299, New York, United States of America</p>
                    </div>
                </div>
                <div className="flex gap-[40px]">
                    <BoxLink title={"Quick Link"} props={[
                        { nameLink: "About" },
                        { nameLink: "Contact" },
                        { nameLink: "Pricing" },
                        { nameLink: "Blog" },
                    ]} />
                    <BoxLink title={"Candidate"} props={[
                        { nameLink: "Browse Jobs" },
                        { nameLink: "Browse Employers" },
                        { nameLink: "Candidate Dashboard" },
                        { nameLink: "Saved Jobs" },
                    ]} />
                    <BoxLink title={"Employers"} props={[
                        { nameLink: "Post a Job" },
                        { nameLink: "Browse Candidates" },
                        { nameLink: "Employers Dashboard" },
                        { nameLink: "Applications" },
                    ]} />  <BoxLink title={"Employers"} props={[
                        { nameLink: "Faqs" },
                        { nameLink: "Privacy Policy" },
                        { nameLink: "Terms & Conditions" },
                    ]} />
                </div>
            </div>
            <div className="border-t-[1px] border-t-gray-600">
                <div className="flex items-center py-[24px] px-[50px] justify-between">
                    <span className="text-gray-500">
                        @ 2024 MyJob - Job Portal. All rights Rserved
                    </span>
                    <div className="flex gap-[20px]">
                        <LocalIcon iconName="facebook_gray" />
                        <LocalIcon iconName="youtube_gray" />
                        <LocalIcon iconName="instagram_gray" />
                        <LocalIcon iconName="twitter_gray" />
                    </div>
                </div>
            </div>
        </div>
    );
}