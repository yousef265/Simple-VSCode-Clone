interface IProps {
    src: string;
}

function ImageIcon({ src }: IProps) {
    return <img src={src} className="w-5" />;
}

export default ImageIcon;
