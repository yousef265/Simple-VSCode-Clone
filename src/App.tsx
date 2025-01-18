import { useSelector } from "react-redux";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";
import { RootState } from "./App/store";
import WelcomeTab from "./components/WelcomeTab";

function App() {
    const { selectedFiles } = useSelector(({ fileTree }: RootState) => fileTree);
    return (
        <>
            <ResizablePanel leftPanel={<RecursiveComponent file={fileTree} />} rightPanel={selectedFiles.length ? <Preview /> : <WelcomeTab />} />
        </>
    );
}

export default App;
