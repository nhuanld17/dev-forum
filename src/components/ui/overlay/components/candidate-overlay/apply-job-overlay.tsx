import { useState } from "react";
import axios from "axios";
import { Button } from "src/components/ui/buttons";
import { useOverlay } from "src/components/ui/overlay";
import { Form } from "src/components/ui/form";
import { LocalIcon } from "src/assets/icons";
import { applyJobSchema, useApplyJob } from "src/features/home/api/candidate/apply-job";
import { useParams } from "react-router-dom";

const CLOUDINARY_UPLOAD_PRESET = "tienpreset";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/dhsv9jnul/image/upload"; // image/upload để hỗ trợ ảnh

/**
 * ApplyJobOverlay component
 * create and submit form to apply job
 * @returns {JSX.Element}
 */
export const ApplyJobOverlay = () => {
    const { dismiss } = useOverlay();
    const id = Number(useParams().id);
    const [uploading, setUploading] = useState(false);
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
    const update = useApplyJob();

    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>,
        setValue: (field: string, value: any) => void
    ) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            try {
                setUploading(true);
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
                formData.append("folder", "my_job");

                const response = await axios.post(CLOUDINARY_UPLOAD_URL, formData);
                const cloudinaryUrl = response.data.secure_url;

                setValue("cvLink", cloudinaryUrl);
                setUploadedImageUrl(cloudinaryUrl);
                console.log("Uploaded Image URL:", cloudinaryUrl);
            } catch (error) {
                console.error("Error uploading image to Cloudinary:", error);
            } finally {
                setUploading(false);
            }
        } else {
            alert("Please select a valid image file.");
        }
    };

    return (
        <Form
            schema={applyJobSchema}
            onSubmit={(data) => {
                console.log(data);
                update.mutate(data);
                console.log(data);
            }}
        >
            {(methods) => (
                <div className="flex relative flex-col border-2 rounded-lg p-8 gap-5 bg-white w-full h-[300px]">
                    <span className="text-[18px] font-[500] leading-7">Apply Job: Senior UX Designer</span>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="file" className="text-[14px] font-[400]">Upload Image (JPG/PNG only)</label>
                        <input
                            id="file"
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, methods.setValue)}
                            className="border rounded-md p-2"
                        />
                    </div>
                    {methods.formState.errors.cvLink && (
                        <p className="text-red-500">{methods.formState.errors.cvLink.message}</p>
                    )}
                    {uploading && <p className="text-blue-500">Uploading...</p>}
                    {uploadedImageUrl && (
                        <a
                            href={uploadedImageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            Upload Success
                        </a>
                    )}
                    <input value={id} type="hidden" {...methods.register("idJob")} />
                    <input type="hidden" {...methods.register("cvLink")} />
                    <Button
                        type="submit"
                        endIcon={<LocalIcon iconName="arrow_right_white" height={24} width={24} />}
                        className="absolute bottom-5 right-8"
                        disabled={uploading}
                    >
                        Apply Now
                    </Button>
                    <button className="absolute top-[-20px] right-[-20px]" onClick={dismiss}>
                        <LocalIcon iconName="exit" height={48} width={48} />
                    </button>
                </div>
            )}
        </Form>
    );
};
