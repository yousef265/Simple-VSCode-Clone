import { useState } from "react";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import BottomArrowIcon from "./SVG/BottomArrowIcon";
import RightArrowIcon from "./SVG/RightArrowIcon";

interface IProps {
    file: IFile;
}

function RecursiveComponent({ file }: IProps) {
    const { isFolder, name, children } = file;
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const toggle = () => {
        isFolder && setIsOpen((prev) => !prev);
    };

    return (
        <>
            <div className="mb-2 ml-2">
                <div className="flex items-center mb-2 cursor-pointer w-fit" onClick={toggle}>
                    <div>
                        {isFolder ? (
                            <span className="flex items-center">
                                {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
                                <RenderFileIcon name={name} isFolder={isFolder} isOpen={isOpen} />
                            </span>
                        ) : (
                            // <FileIcon />
                            <RenderFileIcon name={name} isFolder={isFolder} isOpen={isOpen} />
                        )}
                    </div>
                    <span className="ml-1.5">{name}</span>
                </div>
                {isOpen && children?.map((file, index) => <RecursiveComponent key={index} file={file} />)}
            </div>
        </>
    );
}

export default RecursiveComponent;
