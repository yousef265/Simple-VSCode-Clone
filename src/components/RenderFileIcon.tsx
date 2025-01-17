import { FileIcons } from "../data/fileIcons";
import { nameWithoutExtension } from "../utils/functions";

import ImageIcon from "./ImageIcon";
import FileIcon from "./SVG/FileIcon";
import FolderIcon from "./SVG/FolderIcon";

interface IProps {
    name: string;
    isFolder?: boolean;
    isOpen?: boolean;
}
function RenderFileIcon({ name, isFolder, isOpen }: IProps) {
    const fileName = name.split(".").pop() || nameWithoutExtension(name);

    const iconPath = FileIcons[`${fileName}`];

    if (isFolder) {
        if (!iconPath) {
            return isOpen ? <ImageIcon src="/icons/folder-default-open.svg" /> : <FolderIcon />;
        }
        return <ImageIcon src={`${iconPath}${isOpen ? "-open" : ""}.svg`} />;
    }

    if (iconPath) {
        return <ImageIcon src={`${iconPath}.svg`} />;
    }

    return <FileIcon />;
}

export default RenderFileIcon;
