//candidate info
export type CandidateInfo = {
    id: number;
    fullName: string;
    title: string;
    portfolio: string;
    resumeLink: File | string;
    birthDate: string;
    gender: boolean;
    education: string;
    experience: string;
    bio: string;
    location: string;
    phoneNumber: string;
    mail: string;
}

export type CandidateBasic = {
    fullName: string;
    title: string;
    gender: number;
    dateOfBirth: string;
    porfolio: string;
    pictureProfileLink: string;
}

