import { cva } from "class-variance-authority";
import { FieldError } from "react-hook-form";
import { Error } from "../error";
import { Label } from "../label";

/**
 * Variants for the FieldWrapper component.
 * How to use: fieldWrapperVariants({ className: "your-class-name" });
 */
export const fieldWrapperVariants = cva("relative");

export type FieldWrapperProps = {
  className?: string;
  label?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

/**
 * This is useful when you want to use the FieldWrapper component to wrap a custom input component.
 */
export type FieldWrapperPassThroughProps = Pick<
  FieldWrapperProps,
  "label" | "error"
>;

/**
 * This component is used to wrap form fields with a label and error message.
 * @param {FieldWrapperProps} { className, label, children, error }
 * @returns {JSX.Element}
 */
export const FieldWrapper = ({
  className,
  label,
  children,
  error,
}: FieldWrapperProps) => {
  return (
    <div className={fieldWrapperVariants({ className })}>
      <Label>
        {label}
        <div className="mt-1">{children}</div>
      </Label>
      <Error
        className="absolute inset-x-0 top-full text-right"
        errorMessage={error?.message}
      />
    </div>
  );
};
