import { ICurrentFIle, IFile } from "./../../interfaces/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    selectedFiles: IFile[];
    currentFile: ICurrentFIle;
}

const initialState: IInitialState = {
    selectedFiles: [],
    currentFile: {
        fileName: "",
        content: "",
    },
};

const fileTreeSlice = createSlice({
    name: "fileTree",
    initialState,
    reducers: {
        setSelectedFiles: (state, action: PayloadAction<IFile>) => {
            state.selectedFiles.push(action.payload);
        },
        setCurrentFIle: (state, action: PayloadAction<ICurrentFIle>) => {
            state.currentFile = action.payload;
        },
    },
});

export default fileTreeSlice.reducer;

export const { setCurrentFIle, setSelectedFiles } = fileTreeSlice.actions;
