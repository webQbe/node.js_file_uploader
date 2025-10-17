# Node.js File Upload API

This repo is an adaptation of [Node.js File Upload API with Express Tutorial](https://www.youtube.com/watch?v=4pmkQjsKJ-U&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=18&t=8s&pp=iAQB) by Dave Gray. 

I followed the tutorial to learn followings:
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

## Credits
Original tutorial: [Node.js File Upload API with Express Tutorial](https://www.youtube.com/watch?v=4pmkQjsKJ-U&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=18&t=8s&pp=iAQB) — Dave Gray

## License
MIT License
