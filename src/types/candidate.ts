//candidate info
export type CandidateInfo = {
    id: number;
    fullName: string;
    title: string;
    portfolio: string;
    resumeLink: string;
    birthDate: string;
    gender: number;
    education: string;
    experience: string;
    bio: string;
    location: string;
    phoneNumber: string;
    email: string;
    facebookLink: string;
    twitterLink: string;
    linkedLink: string;
    pictureProfileLink: string;
}

export type CandidateBasic = {
    fullName: string;
    title: string;
    gender: number;
    dateOfBirth: string;
    porfolio: string;
    pictureProfileLink: string;
}

export type CandidateProfile = {
    education: string;
    experience: string;
    bio: string;
}

export type SocialLink = {
    facebookLink: string;
    twitterLink: string;
    linkedLink: string;
}

export type CandidateContact = {
    location: string;
    phoneNumber: string;
    email: string;
}

export type CandidateIntro = {
    id : number;
    fullName: string;
    title:  string;
    location: string;
    pictureProfileLink: string;
    experience: string;
}
