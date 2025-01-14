import { IFile } from "../interfaces";
import FileIcon from "./SVG/FileIcon";
import FolderIcon from "./SVG/FolderIcon";
import RightArrowIcon from "./SVG/RightArrowIcon";

interface IProps {
    file: IFile;
}

function RecursiveComponent({ file }: IProps) {
    return (
        <>
            <div className="mb-2 ml-2">
                <div className="flex items-center mb-2">
                    <span>
                        <RightArrowIcon />
                    </span>
                    <span>{file.isFolder ? <FolderIcon /> : <FileIcon />}</span>
                    <span className="ml-1.5">{file.name}</span>
                </div>
                {file.children?.map((file, index) => (
                    <RecursiveComponent key={index} file={file} />
                ))}
            </div>
        </>
    );
}

export default RecursiveComponent;
