# Node.js File Upload API

- Using `express-fileupload` package with Multi-File upload support
- Upload multiple files with one HTML input
- Use one input to select multiple files 
- Display Success message on Submit
- Uploaded files are moved to a directory in the server
- Using middleware to limit file size, file extensions and to detect empty payloads


## Getting Started
1. Open project folder in VSCode terminal and run `npm init -y`
2. Ensure `package.json `is created
3. Install dependencies: `npm i express express-fileupload`
4. Install dev dependency: `npm i nodemon -D`
5. In package.json file, 
    1. Set `"main": "app.js",`
    2. Update `scripts`:
        ```
        "scripts": {
                    "start": "node app.js",
                    "dev": "nodemon app.js",
                    "test": "echo \"Error: no test specified\" && exit 1"
                }
        ```
6. Run the server: `npm run dev`