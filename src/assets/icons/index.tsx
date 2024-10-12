export * from "./icon-dashboard";
export * from "./icon-login";

import { amex } from "./icon-dashboard";
import React from "react";

const icon = {
    amex,
} satisfies Record<
    string,
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
>;

type ReactIconProps = React.SVGProps<SVGSVGElement> & {
    iconName: keyof typeof icon;
    height?: number | "auto";
    width?: number | "auto";
};

export const LocalIcon = ({
    iconName,
    height = 24,
    width = 24,
    ...props
}: ReactIconProps) => {
    const Comp = icon[iconName];
    return (
        <Comp
            {...(height !== "auto" && { height })}
            {...(width !== "auto" && { width })}
            {...props}
        />
    );
};


