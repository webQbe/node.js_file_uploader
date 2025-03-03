/* Restricts uploads to specific file extensions */
const path = require("path")

const fileExtLimiter = (allowedExtArray) => {
    return (req, res, next) => {
        const files = req.files

        const fileExtensions = []

        Object.keys(files).forEach(key => {
            fileExtensions.push(
                // Extract each file’s extension
                path.extname(files[key].name)
            )
        })

        // Check if fileExtensions array contains extensions from allowedExtArray 
        // (['.png', '.jpg', '.jpeg']).
        const allowed = fileExtensions.every(ext => allowedExtArray.includes(ext))
        
        // If any file has an invalid extension
        if(!allowed){
            /* Generate Error Message */
            const message = `Upload failed! Only ${allowedExtArray.toString()} files allowed.`.replaceAll(",", ", ");

            // Responds with 422 Unprocessable Entity error.
            return res.status(422).json({ status: "error", message });
        }

        next()
    }
}

module.exports = fileExtLimiter