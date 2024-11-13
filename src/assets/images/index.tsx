import { login_banner } from "./images-dashboard";

const image = {
    login_banner,
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