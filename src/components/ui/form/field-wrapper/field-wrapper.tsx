import { cva } from "class-variance-authority";
import { FieldError } from "react-hook-form";
import { Error } from "../error";
import { Label } from "../label";

export const fieldWrapperVariants = cva("relative");

export type FieldWrapperProps = {
  className?: string;
  label?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

export type FieldWrapperPassThroughProps = Pick<
  FieldWrapperProps,
  "label" | "error"
>;

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
