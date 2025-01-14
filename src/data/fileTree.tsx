import { IFile } from "../interfaces";

export const fileTree: IFile = {
    name: "VS Code Clone",
    isFolder: true,
    children: [
        {
            name: "node_modules",
            isFolder: true,
            children: [],
        },
        {
            name: "src",
            isFolder: true,
            children: [
                {
                    name: "components",
                    isFolder: true,
                    children: [
                        {
                            name: "Button.tsx",
                            isFolder: false,
                            content: `interface IProps {

}

const Button = ({}: IProps) => {
  return (
    <button>Click me!</button>
  )
}

export default Button`,
                        },
                    ],
                },
            ],
        },
        {
            name: "public",
            isFolder: true,
            children: [
                {
                    name: "index.html",
                    isFolder: false,
                    content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,
                },
            ],
        },
    ],
};
