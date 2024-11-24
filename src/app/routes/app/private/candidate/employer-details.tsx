import { LocalImage } from "src/assets/images";
import { EmployerBoxInfo, EmployerDescription, EmployerPosition, EmployerTitle } from "src/features/home/components/candidate";
import { useRef } from "react";

const CompanyDetails = {
    id: 1,
    companyName: "Tech Innovators",
    phone: "+1 (800) 123-4567",
    website: "https://www.instagram.com/",
    email: "contact@techinnovators.com",
    dateEstablished: "2010-05-15",
    profilePictureLink: "https://cdn.tgdd.vn/2020/03/GameApp/Instagram-200x200.jpg",
    teamSize: "150",
    description: "Fusce et erat at nibh maximus fermentum. Mauris ac justo nibh. Praesent nec lorem lorem. Donec ullamcorper lacus mollis tortor pretium malesuada. In quis porta nisi, quis fringilla orci. Donec porttitor, odio a efficitur blandit, orci nisl porta elit, eget vulputate quam nibh ut tellus. Sed ut posuere risus, vitae commodo velit. Nullam in lorem dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla tincidunt ac quam quis vehicula. Quisque sagittis ullamcorper magna. Vivamus elementum eu leo et gravida. Sed dignissim placerat diam, ac laoreet eros rutrum sit amet. Donec imperdiet in leo et imperdiet. In hac habitasse platea dictumst. Sed quis nisl molestie diam ullamcorper condimentum. Sed aliquet, arcu eget pretium bibendum, odio enim rutrum arcu, quis suscipit mauris turpis in neque. Vestibulum id vestibulum odio. Sed dolor felis, iaculis eget turpis eu, lobortis imperdiet massa.",
    aboutUs: "Founded in 2010, Tech Innovators strives to bring cutting-edge technology to businesses worldwide, helping them innovate and grow in the digital age. Founded in 2010, Tech Innovators strives to bring cutting-edge technology to businesses worldwide, helping them innovate and grow in the digital ageFounded in 2010, Tech Innovators strives to bring cutting-edge technology to businesses worldwide, helping them innovate and grow in the digital age"
};

export const CompanyDetailsRoute = () => {
    const targetRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        targetRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex flex-col ">
            <div className="px-[50px] py-[24px] bg-[#F1F2F4] text-[18px] font-[500] leading-4">
                <span>Employer Detail</span>
            </div>
            <div className="relative ">
                <LocalImage src="banner" />
                <div className="flex flex-col px-[50px]">
                    <EmployerTitle handleScroll={handleScroll} companydetails={CompanyDetails} />
                    <div className="flex gap-[60px] flex-1 pt-[135px] pb-[100px]">
                        <EmployerDescription companydetails={CompanyDetails} />
                        <EmployerBoxInfo companydetails={CompanyDetails}/>
                    </div>
                    <EmployerPosition ref={targetRef} />
                </div>
            </div>
        </div>
    );
};
