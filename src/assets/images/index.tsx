import { 
    login_banner,
    coder_image,
    static_icon_1,
    static_icon_2,
    static_icon_3,
    static_icon_4,
    banner,
    upload_picture
} from "./images-dashboard";

const image = {
    login_banner,
    coder_image,
    static_icon_1,
    static_icon_2,
    static_icon_3,
    static_icon_4,
    banner,
    upload_picture
} satisfies Record<string, string>;

export type LocalImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    src: keyof typeof image;
};

export const LocalImage = ({ src, ...props }: LocalImageProps) => {

    if (!image[src]) {
        return (
            <img
            src={src}
            {...props}
        />
        )
    }

    return (
        <img
            src={image[src]}
            {...props}
        />
    );
};
