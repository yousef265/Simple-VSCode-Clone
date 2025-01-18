import { ImgHTMLAttributes } from "react";

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    className?: string;
}

function ImageIcon({ src, className = "w-5" }: IProps) {
    return <img src={src} className={className} />;
}

export default ImageIcon;
