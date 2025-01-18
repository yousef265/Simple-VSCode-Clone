import ImageIcon from "./ImageIcon";

interface IProps {}

function WelcomeTab({}: IProps) {
    return (
        <div className="flex items-center justify-center h-screen">
            <ImageIcon src="/icons/vscode.svg" className="w-64 h-64" />
        </div>
    );
}

export default WelcomeTab;
