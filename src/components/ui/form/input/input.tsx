import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from "../field-wrapper";

const inputVariants = cva(
  "w-full rounded-lg border border-primary/30 p-4 text-base focus-visible:outline-none focus-visible:ring-1",
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

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps &
  VariantProps<typeof inputVariants> & {
    register: Partial<UseFormRegisterReturn>;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, variants, label, error, register, ...props }: InputProps,
  ref
) {
  return (
    <FieldWrapper
      label={label}
      error={error}
    >
      <input
        className={inputVariants({ className, variants })}
        ref={ref}
        {...register}
        {...props}
      />
    </FieldWrapper>
  );
});
