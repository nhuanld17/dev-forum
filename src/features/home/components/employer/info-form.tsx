import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, Form, Input } from "src/components/ui";
import { useGetCompanyInfoSetting } from "src/features/home/api/employer/company-info";
import { CompanyInfoSetting } from "src/types";
import { CompanyInfoSchema, useUpdateCompanyInfo } from "../../api/employer/update-company-info";
import { LocalImage } from "src/assets/images";


export const CompanyInfoForm = () => {

  const { data, isLoading } = useGetCompanyInfoSetting();
  const [image, setImage] = useState("upload_picture");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const update = useUpdateCompanyInfo();

  useEffect(() => {
    if (data && data.data) {
      const companyInfo = data.data as CompanyInfoSetting;
      if (companyInfo.imgLink) {
        setImage(companyInfo.imgLink);
        const inputElement = document.querySelector(".input-hiddenn");
        if (inputElement) {
          inputElement.focus();
        }
      }
    }
  }, [data])

  if (isLoading) {
    return <div>Loading...</div>
  }

  const companyInfo = data?.data as CompanyInfoSetting

  const CLOUDINARY_UPLOAD_PRESET = 'tienpreset';
  const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dhsv9jnul/image/upload';

  const handleUploadPicture = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    setValue: (field: string, value: any) => void
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);

      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        formData.append("folder", "my_job");

        const res = await axios.post(CLOUDINARY_UPLOAD_URL, formData);
        const imgLink = res.data.secure_url;
        setValue("imgLink", imgLink);
      } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
      }
    }
  };

  return (
    <>
      <h1 className="text-[18px] font-[500] leading-[28px] text-[#18191C] mt-[32px] mb-[8px]">
        Logo & Banner Image
      </h1>

      <Form
        schema={CompanyInfoSchema}
        onSubmit={(values) => {
          update.mutate(values);
          console.log(values);
        }}
      >
        {(methods) => (
          <div className="flex flex-shrink-0 gap-[48px]">
            <div className="flex flex-col gap-[8px]">
              <span className="text-[14px] leading-5">Profile Picture</span>
              <LocalImage src={image} alt="profile" width={240} height={240} className="rounded-[6px]" />

              {/* Input hiden */}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={(event) => handleFileChange(event, methods.setValue as any)}
              />
              <Button
                variant={"ghost"}
                onClick={handleUploadPicture}
                className="text-black  text-[12px] font-[900]"
              >
                UPLOAD
              </Button>
              <Input
                className="input-hiddenn opacity-0 w-[1px] h-[1px]"
                label=""
                value={image}
                register={methods.register("imgLink")}
                error={methods.formState.errors.imgLink}
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-[8px]">
                <span className="text-[14px]">Company name</span>
                <Input
                  className="w-[700px] h-[48px]"
                  label="Company Name"
                  register={methods.register("companyName")}
                  error={methods.formState.errors.companyName}
                  defaultValue={companyInfo?.companyName}
                />
              </div>

              <div className="flex flex-col gap-[4px]">
                <span className="text-[14px]">About us</span>
                <textarea
                  id="aboutUs"
                  rows={6}
                  {...methods.register("aboutUs")}
                  className="w-[700px] mb-[8px] border border-primary/30 p-[8px] rounded-[5px]"
                >
                  {companyInfo?.aboutUs}
                </textarea>
                {methods.formState.errors.aboutUs && (
                  <span className="text-red-500 flex-row-reverse">{methods.formState.errors.aboutUs.message}</span>
                )}
              </div>
              <Button
                type="submit"
                className="w-[175px] h-[56px] rounded-[4px]"
              >
                Save Changes
              </Button>
            </div>
          </div>
        )}
      </Form>
    </>
  )
}