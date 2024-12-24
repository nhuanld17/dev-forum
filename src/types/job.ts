export type job = {
    id: number;
    title: string;
    tags: string;
    jobType: string;
    profilePictureLink: string;
    maxSalary: number;
}

export type jobApply = {
    id: number;
    title: string;
    jobType: string;
    profilePictureLink: string;
    maxSalary: number;
}

export type jobDetail = {
    id: number;
    title: string;
    tags: string;   
    maxSalary: number;
    education: string;
    experience: string;
    jobType: string;
    jobRole: string;
    expirationDate: string;
    jobLevel: string;
    description: string;
    responsibility: string;
    postAt: string;
    companyName: string;
    phone: string;
    website: string;
    email: string;
    dateEstablished: string;
    profilePictureLink: string;
    teamSize: string;
}

export type JobCompany = {
    id: number;
    jobTitle: string;
    jobType: string;
    numberOfApplications: number;
    dateRemain: number;
    active: boolean;
}

export type jobInfo = {
    id: number;
    title: string;
    tags: string;   
    maxSalary: number;
    salaryType: string;
    education: string;
    experience: string;
    jobType: string;
    jobRole: string;
    expirationDate: string;
    jobLevel: string;
    description: string;
    responsibility: string;
}
