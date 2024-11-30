import { Button, Form, Input } from "src/components/ui";
import { jobSchema, useCreateJobSetting } from "../../api/employer/create-job";



export const JobCreatingForm = () => {

  const { mutate } = useCreateJobSetting();

  return (
    <>
      <h1 className="text-[24px] font-[500] leading-[32px] mb-[32px]">Post a job</h1>
      <Form
        className="mb-[20px]"
        schema={jobSchema}
        onSubmit={(data) => {
          mutate(data);
        }}
      >
        {(methods) => (
          <>
            {/* Job title */}
            <div className="mb-[18px]">
              <label className="text-[14px] font-[400] leading-[20px]">Job title</label>
              <Input
                className="px-[18px] py-[12px] w-full rounded-[5px] border-[1px] border-#E4E5E8"
                register={methods.register("title")}
                error={methods.formState.errors.title}
              />
            </div>

            {/* Tags & Job Role*/}
            <div className="flex items-center justify-between mb-[18px]">
              <div className="w-[49%]">
                <label className="text-[14px] font-[400] leading-[20px]">Tags</label>
                <Input
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                  register={methods.register("tags")}
                  error={methods.formState.errors.tags}
                />
              </div>
              <div className="w-[49%]">
                <label className="text-[14px] font-[400] leading-[20px]">Job Role</label>
                <Input
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                  register={methods.register("jobRole")}
                  error={methods.formState.errors.jobRole}
                />
              </div>
            </div>

            <h1 className="text-[18px] font-[500] leading-[28px] mb-[15px]">Salery</h1>

            <div className="flex items-center justify-between mb-[18px]">
              <div className="w-[49%]">
                <label className="text-[14px] font-[400] leading-[20px]">Max Salary</label>
                <Input
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                  register={methods.register("maxSalary")}
                  error={methods.formState.errors.maxSalary}
                />
              </div>
              <div className="w-[49%]">
                <label className="text-[14px] font-[400] leading-[20px]">Salary Type</label>
                <Input
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                  register={methods.register("salaryType")}
                  error={methods.formState.errors.salaryType}
                />
              </div>
            </div>

            <h1 className="text-[18px] font-[500] leading-[28px] mb-[15px]">Advanced Information</h1>
            <div className="flex items-center justify-between mb-[18px]">
              <div className="w-[32%]">
                <label className="text-[14px] font-[400] leading-[20px]">Education</label>
                <Input
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                  register={methods.register("education")}
                  error={methods.formState.errors.education}
                />
              </div>
              <div className="w-[32%]">
                <label className="text-[14px] font-[400] leading-[20px]">Experience</label>
                <Input
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                  register={methods.register("experience")}
                  error={methods.formState.errors.experience}
                />
              </div>
              <div className="w-[32%]">
                <label className="text-[14px] font-[400] leading-[20px]">Job Type</label>
                <Input
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                  register={methods.register("jobType")}
                  error={methods.formState.errors.jobType}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mb-[18px]">
              <div className="w-[49%]">
                <label className="text-[14px] font-[400] leading-[20px]">Expiration Date</label>
                <Input
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                  register={methods.register("expirationDate")}
                  error={methods.formState.errors.expirationDate}
                />
              </div>
              <div className="w-[49%]">
                <label className="text-[14px] font-[400] leading-[20px]">Job Level</label>
                <Input
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                  register={methods.register("jobLevel")}
                  error={methods.formState.errors.jobLevel}
                />
              </div>
            </div>

            <h1 className="text-[18px] font-[500] leading-[28px] mb-[15px]">Description & Responsibility</h1>

            <div>
              <label className="text-[14px] font-[400] leading-[20px]">Description</label>
              <Input
                className="px-[18px] py-[12px] w-full rounded-[5px] border-[1px] border-#E4E5E8"
                register={methods.register("description")}
                error={methods.formState.errors.description}
              />
            </div>
            <div className="mb-[18px]">
              <label className="text-[14px] font-[400] leading-[20px]">Responsibility</label>
              <Input
                className="px-[18px] py-[12px] w-full rounded-[5px] border-[1px] border-#E4E5E8"
                register={methods.register("responsibility")}
                error={methods.formState.errors.responsibility}
              />
            </div>

            <Button className="mt-20px px-[30px] py-[15px] rounded-[5px] text-[18px]" type="submit">Post job</Button>
          </>
        )}
      </Form>
    </>
  )
};