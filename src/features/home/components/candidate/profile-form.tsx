import { Button, Form, Input } from "src/components/ui"
import { profileSchema, useUpdateProfile } from "../../api/candidate/update-profile"
import { useGetProfileDetail } from "../../api/candidate/Profile";
import { CandidateProfile } from "src/types";

export const ProfileForm = () => {
    const {data, isLoading} = useGetProfileDetail();
    const update = useUpdateProfile();
    if (isLoading) {
        return <div>Loading...</div>
    }
    const profileDetail = data?.data as CandidateProfile;

    return (
        <Form
            schema={profileSchema}
            onSubmit={(data) => {
                update.mutate(data);
                console.log(data)
            }}
        >
            {(methods) => (
                <div className="pt-[30px] flex flex-col gap-[18px]">
                    <div className="flex items-start gap-[18px]">
                        <div className="flex flex-col gap-2 items-start">
                            <span className="text-[14px] leading-5">
                                Education
                            </span>
                            <select
                                defaultValue={profileDetail.education}
                                id="role"
                                {...methods.register("education")}
                                className=" border border-primary/30 block w-[470px] h-[50px] rounded p-4 text-base focus-visible:outline-none focus-visible:ring-1"
                            >
                                <option value="Graduate">Graduate</option>
                                <option value="Master">Master</option>
                                <option value="12/12">12/12</option>
                                <option value="College">College</option>
                            </select>
                            {methods.formState.errors.education && (
                                <p className="mt-2 text-sm text-red-600">
                                    {methods.formState.errors.education.message}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col gap-2 items-start">
                            <span className="text-[14px] leading-5">
                                Experience
                            </span>
                            <select
                                defaultValue={profileDetail.experience}
                                id="role"
                                {...methods.register("experience")}
                                className=" border border-primary/30 block w-[470px] h-[50px] rounded p-4 text-base focus-visible:outline-none focus-visible:ring-1"
                            >
                                <option value="1 year">1 year</option>
                                <option value="1 - 2 year">1 - 2 year</option>
                                <option value="2 - 3 year">2 - 3 year</option>
                                <option value="~ 5 year">~ 5 year</option>
                            </select>
                            {methods.formState.errors.experience && (
                                <p className="mt-2 text-sm text-red-600">
                                    {methods.formState.errors.experience.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[14px] leading-5">
                            Biography
                        </span>
                        <textarea
                            defaultValue={profileDetail.bio}
                            placeholder="Write down your biography here. Let the employers know who you are..."
                            className="border border-primary/30 w-[85%] h-[200px] focus:outline-none focus:outline-[#b6ffff] px-[20px] py-[5px]"
                            {...methods.register("bio")}
                        />
                         {methods.formState.errors.bio && (
                                <p className="mt-2 text-sm text-red-600">
                                    {methods.formState.errors.bio.message}
                                </p>
                        )}
                    </div>
                    <Button
                        className="w-[200px] h-[50px] mt-[20px]"
                        type="submit"
                    >
                        Save Changes
                    </Button>
                </div>
            )}
        </Form>
    )
}