import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
    leftPanel: ReactNode;
    rightPanel: ReactNode;
    showLeftPanel?: boolean;
}

function ResizablePanel({ leftPanel, rightPanel, showLeftPanel = true }: IProps) {
    return (
        <PanelGroup autoSaveId="saveCurrentSize" direction="horizontal">
            {showLeftPanel && (
                <>
                    <Panel collapsible={true} defaultSize={20} className="h-screen">
                        {leftPanel}
                    </Panel>
                    <PanelResizeHandle className="border-r-[3px] border-gray-900" />
                </>
            )}
            <Panel>{rightPanel}</Panel>
        </PanelGroup>
    );
}

export default ResizablePanel;
