import { cva } from "class-variance-authority";

const overlayVariants = cva("fixed inset-0 z-50 bg-gray-500/20 backdrop-blur");

export type OverlayProps = {
    className?: string;
    onDismiss: () => void;
    children: React.ReactNode;
};
export const OverlayLayout = ({
    className = "flex items-center justify-center",
    onDismiss,
    children,
}: OverlayProps) => {
    return (
        <div
            className={overlayVariants({ className })}
            onClick={onDismiss}
        >
            <div onClick={(e) => {
                e.stopPropagation();
            }}
            >
                {children}
            </div>
        </div>
    );
};
