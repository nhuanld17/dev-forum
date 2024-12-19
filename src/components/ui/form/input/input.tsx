import { cva, VariantProps } from "class-variance-authority";
// cva is a function that returns a class name based on the variants passed to it
// VariantProps is a type that takes the variants object and returns the type of the variant
import { forwardRef } from "react"; // permission pointer to the input element
import { UseFormRegisterReturn } from "react-hook-form";
import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from "../field-wrapper";

/**
 * Variants for the Input component.
 * How to use: inputVariants({ className: "your-class-name, ..." });
 */
const inputVariants = cva(
  "rounded border border-primary/30 p-4 text-base focus-visible:outline-none focus-visible:ring-1",
  {
    variants: {
      variants: {
        filled: "bg-white",
        outlined: "bg-transparent",
      },
    },
    defaultVariants: {
      variants: "filled",
    },
  }
);
/**
 * Input component props.
 * How to use: <Input label="Your label" error={formState.errors.yourField} register={register("yourField")} />
 * @typedef {Object} InputProps
 * @property {string}
 */
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps &
  VariantProps<typeof inputVariants> & {
    register: Partial<UseFormRegisterReturn>;
    type?: "text" | "email" | "password" | "select" | "date" | "number"; // Thêm "date"
  };

/**
 * Input component.
 * @param {InputProps} { className, variants, label, error, register, ...props }
 * @returns {JSX.Element}
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, variants, label, error, register, type = "text", ...props }: InputProps,
  ref
) {
  return (
    <FieldWrapper error={error}>
      {type === "date" ? (
      <input
        type="date"
        className={inputVariants({ className, variants })}
        placeholder={label}
        ref={ref}
        {...register}
        {...props}
      />
      ) : (
      <input
        type={type}
        className={inputVariants({ className, variants })}
        placeholder={label}
        ref={ref}
        {...register}
        {...props}
      />
      )}
    </FieldWrapper>
  );
});

