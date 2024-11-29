import { Button } from "src/components/ui"
import { Form } from "src/components/ui"
import { LocalIcon } from "src/assets/icons"
import { socialLinkSchema } from "../../api/candidate/update-social-link";
import { Input } from "src/components/ui";
import { useGetSocialLink } from "../../api/candidate/social-link";
import { SocialLink } from "src/types";
import { useUpdateSocialLink } from "../../api/candidate/update-social-link";


export const SocialLinkForm = () => {
    const {data, isLoading} = useGetSocialLink();
    const update = useUpdateSocialLink();
    if (isLoading) {
        return <div>Loading...</div>;
    }
    const socialLink = data?.data as SocialLink;

    return (
        <Form
            schema={socialLinkSchema}
            onSubmit={(data) => {
                update.mutate(data)
                console.log(data)
            }}
        >
            {(methods) => (
                <div className="flex flex-col items-start gap-[18px] pt-[30px]">
                    <div className="flex flex-col items-start gap-2">
                        <span>
                            Social Link 1
                        </span>
                        <div className="flex items-center flex-shrink-0 border-[3px] px-[24px] py-[10px] rounded-[5px] w-[160%]">
                            <div className="flex items-center gap-[8px] pr-10 border-r-2">
                                <LocalIcon iconName="facebook" height={16} width={16} />
                                <span>
                                    Facebook
                                </span>
                            </div>
                            <Input
                                className="w-[350px] h-[48px] border-none focus:outline-none    "
                                label="Profile link/url..."
                                defaultValue={socialLink.facebookLink}
                                register={methods.register("facebookLink")}
                                error={methods.formState.errors.facebookLink}
                            />
                        </div>
                    </div>
                    <div >
                        <span>
                            Social Link 2
                        </span>
                        <div className="flex items-center flex-shrink-0 border-[3px] px-[24px] py-[10px] rounded-[5px] w-[160%]">
                            <div className="flex items-center gap-[8px] pr-16 border-r-2">
                                <LocalIcon iconName="twitter" height={16} width={16} />
                                <span>
                                    Twitter
                                </span>
                            </div>
                            <Input
                                className="w-[350px] h-[48px] border-none focus:outline-none"
                                label="Profile link/url..."
                                defaultValue={socialLink.twitterLink}
                                register={methods.register("twitterLink")}
                                error={methods.formState.errors.twitterLink}
                            />
                        </div>
                    </div>
                    <div>
                        <span>
                            Social Link 3
                        </span>
                        <div className="flex items-center flex-shrink-0 border-[3px] px-[24px] py-[10px] rounded-[5px] w-[160%]">
                            <div className="flex items-center gap-[8px] pr-12 border-r-2">
                                <LocalIcon iconName="linkedin" height={18} width={18} />
                                <span>
                                    Linkedin
                                </span>
                            </div>
                            <Input
                                className="w-[350px] h-[48px] border-none focus:outline-none"
                                label="Profile link/url..."
                                defaultValue={socialLink.linkedLink}
                                register={methods.register("linkedLink")}
                                error={methods.formState.errors.linkedLink}
                            />
                        </div>
                    </div>
                    <Button
                        type="submit"
                    >
                        Save Changes
                    </Button>
                </div>
            )}
        </Form>
    )
}