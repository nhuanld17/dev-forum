import { cn } from "src/utils";
import { useRef } from "react";
import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &{
    className?: string;
    placeholder?: string;
    value?: string;
};

export const Input: React.FC<InputProps> = 
    (
        { className, 
    placeholder, 
    value }:
    InputProps, ...props) => 
{
    return (
        <input
            className={cn("border border-gray-300 rounded-md p-2 w-full", className)}
            placeholder={placeholder}
            value={value}
            {...props}
        />
    );
}
