import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentFile, setSelectedFiles } from "../../App/features/fileTreeSlice";
import { RootState } from "../../App/store";

interface IProps {
    setIsMenuOpen: (value: boolean) => void;
    menuPosition: {
        x: number;
        y: number;
    };
}

function ContextMenu({ menuPosition: { x, y }, setIsMenuOpen }: IProps) {
    const dispatch = useDispatch();
    const { selectedFiles, elementIdToRemove } = useSelector(({ fileTree }: RootState) => fileTree);

    // -----HANDLERS-----
    useEffect(() => {
        const handleClickEvent = () => {
            setIsMenuOpen(false);
        };

        window.addEventListener("click", handleClickEvent);

        return () => window.removeEventListener("click", handleClickEvent);
    }, [setIsMenuOpen]);

    const onClose = () => {
        const filtered = selectedFiles.filter((file) => file.id !== elementIdToRemove);
        const lastTab = filtered[filtered.length - 1];

        if (!lastTab) {
            dispatch(setSelectedFiles([]));
            return;
        }

        dispatch(setSelectedFiles(filtered));
        dispatch(setCurrentFile(lastTab));
    };

    const onCloseAll = () => {
        dispatch(setSelectedFiles([]));
    };

    return (
        <ul className="absolute p-2 space-y-2 text-black bg-white rounded-md w-fit" style={{ left: `${x + 10}px`, top: `${y + 10}px` }}>
            <li className="px-1 cursor-pointer hover:bg-gray-200" onClick={onClose}>
                close
            </li>
            <li className="px-1 cursor-pointer hover:bg-gray-200" onClick={onCloseAll}>
                close All
            </li>
        </ul>
    );
}

export default ContextMenu;
