import { CompanyContactInfo } from "src/types";
import { useGetContactInfo } from "../../api/employer/company-account-setting";
import { CompanyContactSchema, useUpdateContactInfo } from "../../api/employer/update-contact";
import { Button, Form, Input } from "src/components/ui";
import { CompanyPassword, useUpdatePassword } from "../../api/employer/update-password";


export const AccountSettingForm = () => {

  const { data, isLoading } = useGetContactInfo();
  const updateInfo = useUpdateContactInfo();
  const updatePassword = useUpdatePassword();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const contactInfo = data?.data as CompanyContactInfo;

  return (
    <>
      <Form
        schema={CompanyContactSchema}
        onSubmit={(data) => {
          updateInfo.mutate(data);
          console.log(data);
        }}
      >
        {(methods) => (
          <div className="flex flex-col mt-[32px]">
            <div className="contact">
              <h1 className="text-[#18191C] text-[18px] font-[500] leading-[28px]">
                Contact Info
              </h1>

              <div className="location mt-[18px]">
                <span className="text-[14px] leading-[20px]">
                  Map location
                </span>


                <Input
                  className="w-[800px] h-[56px] focus:outline-none"
                  defaultValue={contactInfo.location}
                  register={methods.register("location")}
                  error={methods.formState.errors.location}
                />
              </div>

              <div className="phone mt-[18px]">
                <span className="text-[14px] leading-[20px]">
                  Phone number
                </span>
                <Input
                  className="w-[800px] h-[56px] focus:outline-none"
                  defaultValue={contactInfo.phoneNumber}
                  register={methods.register("phoneNumber")}
                  error={methods.formState.errors.phoneNumber}
                />
              </div>
            </div>

            <div className="email mt-[18px]">
              <span className="text-[14px] leading-[20px]">
                Email
              </span>

              <Input
                className="w-[800px] h-[56px] focus:outline-none"
                defaultValue={contactInfo.email}
                register={methods.register("email")}
                error={methods.formState.errors.email}
              />
            </div>
            <Button
              className="mt-[32px] w-[200px] h-[56px] bg-[#FF6B00] text-[#FFFFFF] rounded-[8px] focus:outline-none"
              type="submit"
            >
              Save changes
            </Button>
          </div>
        )}
      </Form>
      <Form
        schema={CompanyPassword}
        onSubmit={(data) => {
          updatePassword.mutate(data);
        }
      }>
        {(methods) => (
          <div className="flex flex-col mt-[32px]">
            <div className="password">
              <h1 className="text-[#18191C] text-[18px] font-[500] leading-[28px]">
                Password
              </h1>

              <div className="current-password mt-[18px]">
                <span className="text-[14px] leading-[20px]">
                  Current password
                </span>
                <Input
                  className="w-[800px] h-[56px] focus:outline-none"
                  register={methods.register("currentPassword")}
                  error={methods.formState.errors.currentPassword}
                  type="password"
                />
              </div>

              <div className="new-password mt-[18px]">
                <span className="text-[14px] leading-[20px]">
                  New password
                </span>
                <Input
                  className="w-[800px] h-[56px] focus:outline-none"
                  register={methods.register("newPassword")}
                  error={methods.formState.errors.newPassword}
                  type="password"
                />
              </div>

              <div className="confirm-password mt-[18px]">
                <span className="text-[14px] leading-[20px]">
                  Confirm password
                </span>
                <Input
                  className="w-[800px] h-[56px] focus:outline-none"
                  register={methods.register("confirmPassword")}
                  error={methods.formState.errors.confirmPassword}
                  type="password"
                />
              </div>
            </div>
            <Button
              className="mt-[32px] mb-[32px] w-[200px] h-[56px] bg-[#FF6B00] text-[#FFFFFF] rounded-[8px] focus:outline-none"
              type="submit"
            >
              Save changes
            </Button>
          </div>
        )}

      </Form>
    </>
  )
}