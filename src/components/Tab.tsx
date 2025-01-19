import { useDispatch, useSelector } from "react-redux";
import { setCurrentFile, setElementIdToRemove, setSelectedFiles } from "../App/features/fileTreeSlice";
import { RootState } from "../App/store";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { MouseEvent } from "react";

interface IProps {
    file: IFile;
}

function Tab({ file }: IProps) {
    const { name, id } = file;
    const dispatch = useDispatch();
    const { currentFile, selectedFiles } = useSelector((state: RootState) => state.fileTree);

    const onSelectFile = () => {
        if (currentFile.id === file.id) return;
        dispatch(setCurrentFile(file));
    };

    const onRemove = (e: MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation();
        const filtered = selectedFiles.filter((file) => file.id !== id);
        const lastTab = filtered[filtered.length - 1];

        if (!lastTab) {
            dispatch(setSelectedFiles([]));
            return;
        }

        dispatch(setSelectedFiles(filtered));
        dispatch(setCurrentFile(lastTab));
    };

    return (
        <div
            className={`cursor-pointer border-t-2 ${currentFile.id === file.id ? " border-white" : " border-transparent"}`}
            onClick={onSelectFile}
            onContextMenu={(e) => {
                e.preventDefault();
                dispatch(setElementIdToRemove(file.id));
            }}
        >
            <div className="flex items-center p-2 space-x-2 ">
                <RenderFileIcon name={name} />
                <span>{name}</span>
                <span className="rounded-md cursor-pointer hover:bg-[#64646473]" onClick={(e) => onRemove(e)}>
                    <CloseIcon />
                </span>
            </div>
        </div>
    );
}

export default Tab;
