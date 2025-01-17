import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setCurrentFIle } from "../App/features/fileTreeSlice";
import { RootState } from "../App/store";

interface IProps {
    file: IFile;
}

function Tab({ file }: IProps) {
    const { name } = file;
    const dispatch = useDispatch();
    const { currentFile } = useSelector((state: RootState) => state.fileTree);

    const onSelectFile = () => {
        if (currentFile.id === file.id) return;
        dispatch(setCurrentFIle(file));
    };

    return (
        <div className={`cursor-pointer border-t-2 ${currentFile.id === file.id ? " border-white" : " border-transparent"}`} onClick={onSelectFile}>
            <div className="flex items-center p-2 space-x-2 ">
                <RenderFileIcon name={name} />
                <span>{name}</span>
                <span className="rounded-md cursor-pointer hover:bg-[#64646473]">
                    <CloseIcon />
                </span>
            </div>
        </div>
    );
}

export default Tab;
