import {
    briefcase_duotone,
    briefcaseblue,
    buildings_duotone,
    facebook,
    fi_arrow_right,
    fi_eye,
    google,
    successful
} from "./icon-login";
import {
    circleCheckmark
    , circleInfo
    , circleWarn
    , circleXmark
    , briefcase_transparent
    , facebook_gray
    , instagram_gray
    , twitter_gray
    , youtube_gray
    , phoneCall
    , flagImage
    , logoImage
    , searchIcon
    , iconMap
    , iconPen
    , iconCode
    , iconMarketing
    , iconVideo
    , iconMusic
    , iconFinance
    , iconHealthy
    , iconData
    , iconArrowRight
    , iconUpWork
    , iconSlack
    , iconFreePik
    , iconFaceBook
} from "./icon-dashboard";

import React from "react";

export const icon = {
    briefcase_transparent,
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
    successful,
    facebook_gray,
    instagram_gray,
    twitter_gray,
    youtube_gray,
    phoneCall,
    flagImage,
    logoImage,
    searchIcon,
    iconMap,
    iconPen,
    iconCode,
    iconMarketing,
    iconVideo,
    iconMusic,
    iconFinance,
    iconHealthy,
    iconData,
    iconArrowRight,
    iconUpWork,
    iconSlack,
    iconFreePik,
    iconFaceBook
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
