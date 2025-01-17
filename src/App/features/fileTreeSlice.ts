import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "./../../interfaces/index";

interface IInitialState {
    selectedFiles: IFile[];
    currentFile: IFile;
}

const initialState: IInitialState = {
    selectedFiles: [],
    currentFile: {
        id: "",
        name: "",
        isFolder: false,
    },
};

const fileTreeSlice = createSlice({
    name: "fileTree",
    initialState,
    reducers: {
        setSelectedFiles: (state, action: PayloadAction<IFile>) => {
            state.selectedFiles.push(action.payload);
        },
        setCurrentFIle: (state, action: PayloadAction<IFile>) => {
            state.currentFile = action.payload;
        },
    },
});

export default fileTreeSlice.reducer;

export const { setCurrentFIle, setSelectedFiles } = fileTreeSlice.actions;
