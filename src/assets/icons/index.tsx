import { briefcase_duotone,
        briefcaseblue,
        buildings_duotone,
        facebook,
        fi_arrow_right,
        fi_eye,
        google,
        successful
    } from "./icon-login";
import { circleCheckmark
    , circleInfo
    , circleWarn
    , circleXmark
 } from "./icon-dashboard";

import React from "react";

export const icon = {
    briefcase_duotone,
    briefcaseblue,
    buildings_duotone,
    facebook,
    fi_arrow_right,
    fi_eye,
    google,
    circleCheckmark,
    circleInfo,
    circleWarn,
    circleXmark,
    successful
} satisfies Record<
    string,
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
>;

export type ReactIconProps = React.SVGProps<SVGSVGElement> & {
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
LocalIcon({ iconName: "circleCheckmark", height: 36, width: 36 });


