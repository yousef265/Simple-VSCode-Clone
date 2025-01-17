import NavTabs from "./components/NavTabs";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

function App() {
    return (
        <>
            <div className="flex">
                <div className="w-64 h-screen border-r-2 border-gray-900">
                    <RecursiveComponent file={fileTree} />
                </div>
                <NavTabs />
            </div>
        </>
    );
}

export default App;
