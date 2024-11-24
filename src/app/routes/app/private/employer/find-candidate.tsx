import { Button, useOverlay } from "src/components/ui";
import { ApplyJobOverlay } from "src/components/ui/overlay/components/candidate-overlay";
import { OverlayCandidateProfile } from "src/components/ui/overlay/components/company-overlay";


export const FindCandidateRoute = () => {
    const { display, dismiss } = useOverlay();
    
    const CandidateInfo = {
        id: 1,
        fullName: "Esther Howard",
        title: "Software Engineer",
        portfolio: "https://portfolio.estherhoward.com",
        resumeLink: "https://drive.google.com/drive/folders/1mdwBwzSeMwenYi0Us0LS6pLPWcRqbGBj", // Là file PDF
        birthDate: "1990-06-14", // Ngày sinh thực tế hơn
        gender: true, // true = Nam; false = Nữ (theo cách quy ước trong context)
        education: "Master's Degree in Computer Science",
        experience: "5+ years of experience in software engineering",
        bio: `A highly skilled and detail-oriented software engineer specializing in developing scalable and maintainable applications. 
    Passionate about working with modern technologies, solving technical challenges, and creating impactful solutions for end users. 
    Experienced in building large-scale distributed systems and leading development teams.`,
        location: "Ho Chi Minh City, Vietnam",
        phoneNumber: "+84 901 234 567",
        mail: "esther.howard@example.com",
    };
    
    return (
        <>
            <div>
                <Button onClick={() => display(<OverlayCandidateProfile props={CandidateInfo} />)}>Dismiss</Button>
            </div>
            <div>
                <Button onClick={() => display(<ApplyJobOverlay/>)}>Dismiss</Button>
            </div>
        </>
    );
}