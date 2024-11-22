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
    , briefcase_transparent
    , facebook_gray
    , instagram_gray
    , twitter_gray
    , youtube_gray
    , phoneCall
    , flagImage
    , logoImage
    , searchIcon
 } from "./icon-dashboard";

import { bell_ringing,
    candidate_avatar,
    bookmark_blue,
    bookmark_gray,
    briefcase_gray,
    gear_blue,
    gear_gray,
    stack_blue,
    stack_gray,
    global_blue,
    global_gray,
    user_blue,
    user_gray,
    usercircle_blue,
    usercircle_gray
 } from "./icon-candidate";

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
    bell_ringing,
    candidate_avatar,
    bookmark_blue,
    bookmark_gray,
    briefcase_gray,
    gear_blue,
    gear_gray,
    stack_blue,
    stack_gray,
    global_blue,
    global_gray,
    user_blue,
    user_gray,
    usercircle_blue,
    usercircle_gray
} satisfies Record<
    string,
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
>;

export type ReactIconProps = React.SVGProps<SVGSVGElement> & {
    iconName: keyof typeof icon | string;
    height?: number | "auto";
    width?: number | "auto";
};

export const LocalIcon = ({
    iconName,
    height = 24,
    width = 24,
    ...props
}: ReactIconProps) => {
    const Comp = typeof iconName === "string" && iconName in icon 
        ? icon[iconName as keyof typeof icon] 
        : null;
    
    if (!Comp) {
        return (
            <div>null</div>
        );
    }  

    return (
        <Comp
            {...(height !== "auto" && { height })}
            {...(width !== "auto" && { width })}
            {...props}
        />
    );
};
