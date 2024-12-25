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
                <select
                  id="jobRole"
                  {...methods.register("jobRole")}
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                >
                  <option value="" disabled selected>
                    Select...
                  </option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Fullstack Developer">Fullstack Developer</option>
                  <option value="Mobile Developer">Mobile Developer</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Data Engineer">Data Engineer</option>
                  <option value="Data Scientist">Data Scientist</option>
                </select>
                {methods.formState.errors.jobRole && (
                  <p className="mt-2 text-sm text-red-600">
                    {methods.formState.errors.jobRole.message}
                  </p>
                )}
              </div>
            </div>

            <h1 className="text-[18px] font-[500] leading-[28px] mb-[15px]">Salery</h1>

            {/* Max salary and salary type */}
            <div className="flex items-center justify-between mb-[18px]">
              <div className="w-[49%]">
                <label className="text-[14px] font-[400] leading-[20px]">Max Salary</label>
                <Input
                  type="number"
                  min={0}
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                  register={methods.register("maxSalary")}
                  error={methods.formState.errors.maxSalary}
                />
              </div>
              <div className="w-[49%]">
                <label className="text-[14px] font-[400] leading-[20px]">Salary Type</label>
                <select
                  id="salaryType"
                  {...methods.register("salaryType")}
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                >
                  <option value="" disabled selected>
                    Select...
                  </option>
                  <option value="USD">USD</option>
                  <option value="VND">VND</option>
                </select>
                {methods.formState.errors.salaryType && (
                  <p className="mt-2 text-sm text-red-600">
                    {methods.formState.errors.salaryType.message}
                  </p>
                )}
              </div>
            </div>

            {/* Edutcation */}
            <h1 className="text-[18px] font-[500] leading-[28px] mb-[15px]">Advanced Information</h1>
            <div className="flex items-center justify-between mb-[18px]">
              <div className="w-[32%]">
                <label className="text-[14px] font-[400] leading-[20px]">Education</label>
                <select
                  id="education"
                  {...methods.register("education")}
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                >
                  <option value="" disabled selected>
                    Select...
                  </option>
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

              {/* Experience */}
              <div className="w-[32%]">
                <label className="text-[14px] font-[400] leading-[20px]">Experience</label>
                <select
                  id="experience"
                  {...methods.register("experience")}
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                >
                  <option value="" disabled selected>
                    Select...
                  </option>
                  <option value="1 year">1 year</option>
                  <option value="1 - 2 years">1 - 2 years</option>
                  <option value="2 - 3 years">2 - 3 years</option>
                  <option value="~ 5 years">~ 5 years</option>
                </select>
                {methods.formState.errors.experience && (
                  <p className="mt-2 text-sm text-red-600">
                    {methods.formState.errors.experience.message}
                  </p>
                )}
              </div>

              {/* Job Type */}
              <div className="w-[32%]">
                <label className="text-[14px] font-[400] leading-[20px]">Job Type</label>
                <select
                  id="jobtype"
                  {...methods.register("jobType")}
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                >
                  <option value="" disabled selected>
                    Select...
                  </option>
                  <option value="Full time">Full time</option>
                  <option value="Part time">Part time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
                {methods.formState.errors.jobType && (
                  <p className="mt-2 text-sm text-red-600">
                    {methods.formState.errors.jobType.message}
                  </p>
                )}
              </div>
            </div>

            {/* Expiration Date & Job Level */}
            <div className="flex items-center justify-between mb-[18px]">
              <div className="w-[49%]">
                <label className="text-[14px] font-[400] leading-[20px]">Expiration Date</label>
                <Input
                  type="date"
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                  register={methods.register("expirationDate")}
                  error={methods.formState.errors.expirationDate} 
                />
              </div>
              <div className="w-[49%]">
                <label className="text-[14px] font-[400] leading-[20px]">Job Level</label>
                <select 
                  id="jobLevel"
                  {...methods.register("jobLevel")}
                  className="w-full px-[18px] py-[12px] rounded-[5px] border-[1px] border-#E4E5E8"
                >
                  <option value="" disabled selected>
                    Select...
                  </option>
                  <option value="Intern">Intern</option>
                  <option value="Fresher">Fresher</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                  <option value="Team Leader">Team Leader</option>
                  <option value="Manager">Manager</option>
                </select>
                {methods.formState.errors.jobLevel && (
                  <p className="mt-2 text-sm text-red-600">
                    {methods.formState.errors.jobLevel.message}
                  </p>
                )}
              </div>
            </div>

            <h1 className="text-[18px] font-[500] leading-[28px] mb-[15px]">Description & Responsibility</h1>

            <div>
              <label className="text-[14px] font-[400] leading-[20px]">Description</label>
              <textarea 
                className="px-[18px] py-[12px] w-full rounded-[5px] border-[1px] border-#E4E5E8"
                {...methods.register("description")}
                id="description" 
                rows={4} cols={50} placeholder="Write down your job description here. Let the candidates know what they will do...">
              </textarea>
              {methods.formState.errors.description && (
                <p className="mt-2 text-sm text-red-600">
                  {methods.formState.errors.description.message}
                </p>
              )}
            </div>
            <div className="mb-[18px]">
              <label className="text-[14px] font-[400] leading-[20px]">Responsibility</label>
              <textarea 
                className="px-[18px] py-[12px] w-full rounded-[5px] border-[1px] border-#E4E5E8"
                {...methods.register("responsibility")}
                id="responsibility" 
                rows={4} cols={50} placeholder="Write down your job responsibility here. Let the candidates know what they will do...">
              </textarea>
              {methods.formState.errors.responsibility && (
                <p className="mt-2 text-sm text-red-600">
                  {methods.formState.errors.responsibility.message}
                </p>
              )}
            </div>

            <Button className="mt-20px px-[30px] py-[15px] rounded-[5px] text-[18px]" type="submit">Post job</Button>
          </>
        )}
      </Form>
    </>
  )
};