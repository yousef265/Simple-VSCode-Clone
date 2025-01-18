import { useSelector } from "react-redux";
import { RootState } from "../App/store";
import Tab from "./Tab";

interface IProps {}

function NavTabs({}: IProps) {
    const { selectedFiles } = useSelector((state: RootState) => state.fileTree);

    return (
        <div className="w-full ">
            <div className="flex border-b-2 border-gray-900">
                {selectedFiles.map((file) => (
                    <Tab key={file.id} file={file} />
                ))}
            </div>
        </div>
    );
}

export default NavTabs;
