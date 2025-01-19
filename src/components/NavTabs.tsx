import { useSelector } from "react-redux";
import { RootState } from "../App/store";
import Tab from "./Tab";
import ContextMenu from "./ui/ContextMenu";
import { MouseEvent, useState } from "react";
import { IMenuPosition } from "../interfaces";

interface IProps {}

function NavTabs({}: IProps) {
    const { selectedFiles } = useSelector((state: RootState) => state.fileTree);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [menuPosition, setMenuPosition] = useState<IMenuPosition>({
        x: 0,
        y: 0,
    });

    const onContextMenuClicked = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsMenuOpen(true);
        setMenuPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    return (
        <>
            <div className="w-full" onContextMenu={(e) => onContextMenuClicked(e)}>
                <div className="flex border-b-2 border-gray-900">
                    {selectedFiles.map((file) => (
                        <Tab key={file.id} file={file} />
                    ))}
                </div>
            </div>

            {isMenuOpen && <ContextMenu menuPosition={menuPosition} setIsMenuOpen={setIsMenuOpen} />}
        </>
    );
}

export default NavTabs;
