import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

function App() {
    return (
        <div className="mt-5">
            <RecursiveComponent file={fileTree} />
        </div>
    );
}

export default App;
