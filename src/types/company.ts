export type CompanyInfo = {
    id: number;
    companyName: string;
    phone: string;
    website: string;
    email: string;
    dateEstablished: string;　
    profilePictureLink: string;
    teamSize: string;
}
export type CompanyDetails = {
    id: number;
    companyName: string;
    phone: string;
    website: string;
    email: string;
    dateEstablished: string;
    profilePictureLink: string;
    teamSize: string;
    description: string;
    aboutUs: string;
}
export type CompanyIntro = {
    id: number;
    companyName: string;
    teamSize: string;
    numberJobs: number;
    profilePictureLink: string;
}

export type CompanyInfoSetting = {
    imgLink: string;
    companyName: string;
    aboutUs: string;
}

export type FoundingInfo = {
    industryType: string;
    teamSize: string;
    yearOfEstablishment: string;
    companyWebSite: string;
}

export type CompanyContactInfo = {
    location: string;
    phoneNumber: string;
    email: string;
}
