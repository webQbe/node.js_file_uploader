/* Backend Express Server */
const express = require("express"); // Handles HTTP requests
const fileUpload = require("express-fileupload"); //  Middleware for handling file uploads
const path = require("path"); // Helps with file path resolution

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
    (req, res) => {
        // Log uploaded files to the console
        const files = req.files
        console.log(files)
        // Send back a JSON response
        return res.json({ status: 'logged', message: 'logged' })
    }
)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));