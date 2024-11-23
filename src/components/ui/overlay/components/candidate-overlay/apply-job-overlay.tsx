import { Button } from "src/components/ui/buttons";
import { useOverlay } from "src/components/ui/overlay";
import { Form } from "src/components/ui/form";
import { z } from "zod";
import { LocalIcon } from "src/assets/icons";

/**
 * schema for form validation
 * @param file - FileList
 */
const schema = z.object({
    file: z
        .instanceof(FileList)
        .refine((files) => files.length > 0, "File is required")
        .refine((files) => files[0]?.type === "application/pdf", "Only PDF files are allowed"),
});

/**
 * FormData type
 * @type FormData
 * @returns FormData
 * @property file - FileList
 */
type FormData = z.infer<typeof schema>;

/**
 * ApplyJobOverlay component
 * create and submit form to apply job
 * @returns {JSX.Element}
 */
export const ApplyJobOverlay = () => {
    const { dismiss } = useOverlay();
    const handleUpload = async (data: FormData) => {
        const file = data.file[0];
        console.log("Uploading file:", file);
    };
    return (
        <Form
            schema={schema}
            onSubmit={handleUpload}
        >
            {(methods) => (
                <>
                    <div className="flex relative flex-col border-2 rounded-lg p-8 gap-5 bg-white w-full h-[290px]">
                        <span className="text-[18px] font-[500] leading-7">Apply Job: Senior UX Designer</span>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="file" className="text-[14px] font-[400]">Choose Resume</label>
                            <input
                                id="file"
                                type="file"
                                accept=".pdf"
                                {...methods.register("file")}
                                className="border rounded-md p-2"
                            />
                        </div>
                        {methods.formState.errors.file && (
                            <p className="text-red-500">{methods.formState.errors.file.message}</p>
                        )}
                        <Button 
                            type="submit"
                            endIcon={<LocalIcon iconName="arrow_right_white" height={24} width={24}/>}
                            className="absolute bottom-5 right-8"
                        >
                            Apply Now
                        </Button>
                        <button className="absolute top-[-20px] right-[-20px] ">
                            <LocalIcon iconName="exit" height={48} width={48} onClick={dismiss}/>
                        </button>
                    </div>
                </>
            )}
        </Form>
    );
}
