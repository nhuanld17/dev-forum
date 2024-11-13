import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm, UseFormProps, UseFormReturn } from "react-hook-form";
import { z, ZodTypeAny } from "zod";

/**
 * This is the type for the Form component.
 */
export type FormProps<Schema, TFormValues extends FieldValues> = {
    className?: string;
    option?: UseFormProps<TFormValues>;
    schema: Schema;
    onSubmit: SubmitHandler<TFormValues>;
    children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

/**
 *  This component is used to wrap form fields with a label and error message.
 * @param props
 * @returns  {JSX.Element}
 */
export const Form = <
    Schema extends ZodTypeAny,
    TFormValues extends FieldValues = z.infer<Schema>,
>({
    className,
    option,
    schema,
    onSubmit,
    children,
}: FormProps<Schema,TFormValues>) => {
    const form = useForm<TFormValues>({
        ...option,
        resolver: zodResolver(schema),
    });

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={className}
        >
            {children(form)}
        </form>
    );
};
