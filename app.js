/* Backend Express Server */
const express = require("express"); // Handles HTTP requests
const fileUpload = require("express-fileupload"); //  Middleware for handling file uploads
const path = require("path"); // Helps with file path resolution

/*  Import Middleware to validate file uploads before processing */
const filesPayloadExists = require('./middleware/filesPayloadExists');
const fileExtLimiter = require('./middleware/fileExtLimiter');
const fileSizeLimiter = require('./middleware/fileSizeLimiter');

// Defines the server port (defaults to 3500).
const PORT = process.env.PORT || 3500;

const app = express();

// Serving index.html
app.get("/", (req, res) => {
    // When a user visits http://localhost:3500/, the server sends the index.html file.
    res.sendFile(path.join(__dirname, "index.html"));
});

// Handling File Uploads
app.post("/upload",
    fileUpload({ createParentPath: true }), // Process uploaded files
    filesPayloadExists, // Ensure files exist in the request 
    fileExtLimiter(['.png','.jpg','.jpeg']), // Ensure that files are ≤ 2MB
    fileSizeLimiter, // Ensure that files are images
    /* Continue If all conditions pass */
    (req, res) => {
        // Log uploaded files to the console
        const files = req.files
        console.log(files)

        /* Process the Uploaded Files */
        Object.keys(files) // Get an array of file names (keys)
                .forEach( // Iterate over each uploaded file
                    key => { 
                    // Construct full file path in the files/ directory.
                    const filepath = path.join(__dirname, 'files', files[key].name)
                    // Move current file to the files/ directory
                    files[key].mv(filepath, (err) => {
                        //  If an error occurs while moving the file, return 500 Internal Server Error.
                        if(err) return res.status(500).json({ status: "error", message: err })
                })
        })

        // Return Success Response
        return res.json({ 
            status: 'Success', 
            /* Convert the list of uploaded filenames into a comma-separated string. */
            message: Object.keys(files).toString() 
        })
    }
)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));