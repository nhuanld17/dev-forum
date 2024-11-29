//candidate info
import { facebook } from 'src/assets/icons/icon-login';
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
