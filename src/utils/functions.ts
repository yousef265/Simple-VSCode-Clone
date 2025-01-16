import { IFile } from "./../interfaces/index";
export const nameWithoutExtension = (name: string) => {
    const fileName = name.split("/").pop();

    if (fileName && fileName.includes(".") && !fileName.startsWith(".")) {
        return fileName.substring(0, fileName.lastIndexOf("."));
    }

    return fileName;
};

export const fileExist = (files: IFile[], id: string) => {
    return files.find((file) => file.id === id);
};
