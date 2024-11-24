import { 
    login_banner,
    coder_image,
    static_icon_1,
    static_icon_2,
    static_icon_3,
    static_icon_4,
    banner
} from "./images-dashboard";

const image = {
    login_banner,
    coder_image,
    static_icon_1,
    static_icon_2,
    static_icon_3,
    static_icon_4,
    banner
} satisfies Record<string, string>;

export type LocalImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    src: keyof typeof image;
};

export const LocalImage = ({ src, ...props }: LocalImageProps) => {
    return (
        <img
            src={image[src]}
            {...props}
        />
    );
};
