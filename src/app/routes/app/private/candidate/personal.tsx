import { PersonalForm } from "src/features/home/components/candidate/personal-form"

export const  PersonalRoute = () => {
    return (
        <div className="pt-[32px] flex flex-col gap-[18px]">
            <span className="text-[18px] font-[500] leading-7">
                Basic Information
            </span>
            <PersonalForm />
        </div>
    )
}