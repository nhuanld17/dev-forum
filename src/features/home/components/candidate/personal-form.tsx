import { Form } from "src/components/ui";
import { Button } from "src/components/ui";
import { LocalImage } from "src/assets/images";
import { personalSchema, useUpdatePersonal } from "../../api/candidate/update-personal";
import { useState, useRef } from "react";
import { Input } from "src/components/ui";
import axios from "axios";
import { useGetCandidateBasic } from "../../api/candidate/personal";
import { CandidateBasic } from "src/types";
import { useEffect } from "react";

export const PersonalForm = () => {
    const { data, isLoading } = useGetCandidateBasic();
    const [image, setImage] = useState("upload_picture");
    const update = useUpdatePersonal();
    const fileInputRef = useRef<HTMLInputElement | null>(null);


    useEffect(() => {
        if (data && data.data) {
            const candidateBasic = data.data as CandidateBasic;
            if (candidateBasic.pictureProfileLink) {
                console.log(candidateBasic.pictureProfileLink);
                setImage(candidateBasic.pictureProfileLink);
                const inputElement = document.querySelector(".input-hiddenn");
                if (inputElement) {
                    inputElement.focus(); 
                }
            }
        }
    }, [data])


    if (isLoading) {
        return <div>Loading...</div>;
    }
    const candidateBasic = data?.data as CandidateBasic;


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

                const response = await axios.post(CLOUDINARY_UPLOAD_URL, formData);
                const cloudinaryUrl = response.data.secure_url;

                setValue("pictureProfileLink", cloudinaryUrl);
                setImage(cloudinaryUrl);
                console.log(cloudinaryUrl);
            } catch (error) {
                console.error("Error uploading to Cloudinary:", error);
            }
        }
    };

    return (
        <Form
            schema={personalSchema}
            onSubmit={
                (data) => {
                    update.mutate(data);
                    console.log(data);
                }
            }
        >
            {(methods) => (
                <div className="flex flex-shrink-0 gap-[48px]">
                    <div className="flex flex-col gap-[8px]">
                        <span className="text-[14px] leading-5">Profile Picture</span>
                        <LocalImage src={image} height={240} width={240} className="rounded-[6px]" />

                        {/* Input hidden*/}
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={(e) => handleFileChange(e, methods.setValue as any)}
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
                            register={methods.register("pictureProfileLink")}
                            error={methods.formState.errors.pictureProfileLink}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-8">
                        <div className="flex flex-col items-start gap-[18px]">
                            <div className="flex items-start gap-[18px]">
                                <div>
                                    <span>Full name</span>
                                    <Input
                                        className="w-[350px] h-[48px]"
                                        label=""
                                        defaultValue={candidateBasic.fullName}
                                        register={methods.register("fullName")}
                                        error={methods.formState.errors.fullName}
                                    />
                                </div>
                                <div>
                                    <span>Tittle/headline</span>
                                    <Input
                                        className="w-[350px] h-[48px]"
                                        label=""
                                        value={candidateBasic.title}
                                        register={methods.register("title")}
                                        error={methods.formState.errors.title}
                                    />
                                </div>
                            </div>
                            <div className="flex items-start gap-[18px]">
                                <div>
                                    <span>Gender</span>
                                    <select
                                        defaultValue={candidateBasic.gender}
                                        id="role"
                                        {...methods.register("gender")}
                                        className=" border border-primary/30 block w-[350px] h-[50px] rounded p-4 text-base focus-visible:outline-none focus-visible:ring-1"
                                    >
                                        <option value="0">Male</option>
                                        <option value="1">Female</option>
                                    </select>
                                    {methods.formState.errors.gender && (
                                        <p className="mt-2 text-sm text-red-600">
                                            {methods.formState.errors.gender.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <span>Date of Birth</span>
                                    <Input
                                        className="w-[350px] h-[48px]"
                                        label=""
                                        type="date"
                                        defaultValue={candidateBasic.dateOfBirth}
                                        register={methods.register("dateOfBirth")}
                                        error={methods.formState.errors.dateOfBirth}
                                    />
                                </div>
                            </div>
                            <div>
                                <span>
                                    Porfolio Link
                                </span>
                                <Input
                                    className="w-[720px] h-[48px]"
                                    label="Website url..."
                                    defaultValue={candidateBasic.porfolio}
                                    register={methods.register("porfolio")}
                                    error={methods.formState.errors.porfolio}
                                />
                            </div>
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
    );
};
