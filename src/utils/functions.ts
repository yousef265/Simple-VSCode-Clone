export const nameWithoutExtension = (name: string) => {
    // Extract the last part of the path (filename or directory)
    const fileName = name.split("/").pop();

    // If it's a filename with an extension, remove the extension
    if (fileName && fileName.includes(".") && !fileName.startsWith(".")) {
        return fileName.substring(0, fileName.lastIndexOf("."));
    }

    // Return the name as is if it's a directory or a file starting with a dot (like ".vite")
    return fileName;
};
