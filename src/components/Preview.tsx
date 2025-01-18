import { useSelector } from "react-redux";
import SyntaxLighter from "./SyntaxLighter";
import { RootState } from "../App/store";
import NavTabs from "./NavTabs";

interface IProps {}

function Preview({}: IProps) {
    const { currentFile } = useSelector((state: RootState) => state.fileTree);
    return (
        <>
            <NavTabs />
            <SyntaxLighter content={currentFile.content || ""} />
        </>
    );
}

export default Preview;
