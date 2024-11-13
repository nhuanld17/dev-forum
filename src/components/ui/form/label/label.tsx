import { cva, VariantProps } from "class-variance-authority";

const labelVariants = cva("text-xs text-primary");

/**
 * Label component props.
 * @typedef {Object} LabelProps
 */
export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof labelVariants>;
/**
 * Label component.
 * @param {LabelProps} { className, children, ...props }
 * @returns {JSX.Element}
 */
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
