import React, { forwardRef } from "react";

export const EmployerPosition = forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div ref={ref} className="border-t-2 py-[100px]">
            <span className="text-[40px] font-[500] leading-[48px]">
                Open Position
            </span>
        </div>
    );
});
