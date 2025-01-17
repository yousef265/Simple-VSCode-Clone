import { useState } from "react";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import BottomArrowIcon from "./SVG/BottomArrowIcon";
import RightArrowIcon from "./SVG/RightArrowIcon";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentFIle, setSelectedFiles } from "../App/features/fileTreeSlice";
import { RootState } from "../App/store";
import { fileExist } from "../utils/functions";

interface IProps {
    file: IFile;
}

function RecursiveComponent({ file }: IProps) {
    const dispatch = useDispatch();
    const { selectedFiles } = useSelector((state: RootState) => state.fileTree);
    const { id, isFolder, name, children } = file;
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    const onSelectFile = () => {
        const exist = fileExist(selectedFiles, id);
        dispatch(setCurrentFIle(file));
        if (exist) return;
        dispatch(setSelectedFiles(file));
    };

    return (
        <div className="mb-2 ml-2">
            {isFolder ? (
                <div className="flex items-center mb-2 cursor-pointer w-fit" onClick={toggle}>
                    <div className="flex items-center">
                        {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
                        <RenderFileIcon name={name} isFolder={isFolder} isOpen={isOpen} />
                    </div>
                    <span className="ml-1.5">{name}</span>
                </div>
            ) : (
                <div className="flex items-center mb-2 cursor-pointer w-fit" onClick={onSelectFile}>
                    <RenderFileIcon name={name} isFolder={isFolder} isOpen={isOpen} />
                    <span className="ml-1.5">{name}</span>
                </div>
            )}

            {isOpen && children?.map((file, index) => <RecursiveComponent key={index} file={file} />)}
        </div>
    );
}

export default RecursiveComponent;
