import { Button, useOverlay } from "src/components/ui";
import { ApplyJobOverlay } from "src/components/ui/overlay/components/candidate-overlay";
import { OverlayCandidateProfile } from "src/components/ui/overlay/components/company-overlay";


export const FindCandidateRoute = () => {
    const { display, dismiss } = useOverlay();
    const DataTemplate = {
        id: 1,
        fullName: "Esther Howard",
        title: "Software Engineer",
        resumeLink: "https://example.com/resume/1",
        birthDate: "14 June, 2021",
        gender: true,
        education: "Master Degree",
        experience: "5 years",
        bio: "A passionate software engineer with a focus on scalable applications. Enjoys solving complex technical challenges and working with modern tech stacks. A passionate software engineer with a focus on scalable applications. Enjoys solving complex technical challenges and working with modern tech stacks. A passionate software engineer with a focus on scalable applications. Enjoys solving complex technical challenges and working with modern tech stacks. A passionate software engineer with a focus on scalable applications. Enjoys solving complex technical challenges and working with modern tech stacks.",
        location: "Hồ Chí Minh City, Vietnam",
        phoneNumber: "+84901234567",
        mail: "nguyenvana@example.com"
    };
    return (
        <>
            <div>
                <Button onClick={() => display(<OverlayCandidateProfile props={DataTemplate} />)}>Dismiss</Button>
            </div>
            <div>
                <Button onClick={() => display(<ApplyJobOverlay/>)}>Dismiss</Button>
            </div>
        </>
    );
}