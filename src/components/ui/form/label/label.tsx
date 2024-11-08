import { cva, VariantProps } from "class-variance-authority";

const labelVariants = cva("text-xs text-primary");

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof labelVariants>;

export const Label = ({ className, children, ...props }: LabelProps) => {
  return (
    <label
      className={labelVariants({ className })}
      {...props}
    >
      {children}
    </label>
  );
};
