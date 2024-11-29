import { Input, Form, Button } from "src/components/ui";
import { accountSettingSchema } from "../../api/candidate/update-account-setting";
import { useGetAccountSetting } from "../../api/candidate/account-setting";
import { useUpdateAccountSetting } from "../../api/candidate/update-account-setting";
import { CandidateContact } from "src/types";


export const AccountSettingForm = () => {
    const { data, isLoading } = useGetAccountSetting();
    const update = useUpdateAccountSetting();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    const contactInfo = data?.data as CandidateContact;
    return (
        <Form
            schema={accountSettingSchema}
            onSubmit={(data) => {
                update.mutate(data);
                console.log(data);
            }}
        >
            {(methods) => (
                <div className="pt-[30px]">
                    <div className="flex flex-col gap-[18px] items-start">
                        <span className="text-[18px] font-[500] leading-7">
                            Contact Info
                        </span>
                        <div className="flex flex-col items-start gap-2">
                            <span className="text-[14px] leading-5">
                                Map Location
                            </span>
                            <Input
                                className="w-[867px] h-[56px] focus:outline-none"
                                defaultValue={contactInfo.location}
                                register={methods.register("location")}
                                error={methods.formState.errors.location}
                            />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <span className="text-[14px] leading-5">
                                Phone
                            </span>
                            <Input
                                className="w-[867px] h-[56px] focus:outline-none"
                                label="Phone number..."
                                defaultValue={contactInfo.phoneNumber}
                                register={methods.register("phoneNumber")}
                                error={methods.formState.errors.phoneNumber}
                            />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <span className="text-[14px] leading-5">
                                Email
                            </span>
                            <Input
                                className="w-[867px] h-[56px] focus:outline-none"
                                label="Email address..."
                                defaultValue={ contactInfo.email}
                                register={methods.register("email")}
                                error={methods.formState.errors.email}
                            />
                        </div>
                    </div>
                    <div>
                        <span className="text-[18px] font-[500] leading-7">
                            Change Password
                        </span>
                        <div className="flex flex-col gap-4 pb-[30px]">
                            <Input
                                className="w-[867px] h-[56px] focus:outline-none"
                                label="Current password..."
                                defaultValue={""}
                                register={methods.register("currentPassword")}
                                error={methods.formState.errors.currentPassword}
                            />
                            <Input
                                className="w-[867px] h-[56px] focus:outline-none"
                                label="New password..."
                                defaultValue={""}
                                register={methods.register("newPassword")}
                                error={methods.formState.errors.newPassword}
                            />
                            <Input
                                className="w-[867px] h-[56px] focus:outline-none"
                                label="Confirm password..."
                                defaultValue={""}
                                register={methods.register("newPassword")}
                                error={methods.formState.errors.newPassword}
                            />
                        </div>
                        <Button
                            type="submit"
                        >
                            Save Changes
                        </Button>
                    </div>
                </div>
            )}
        </Form>
    )
};
