/* Ensure the request contains uploaded files */
const filesPayloadExists = (req, res, next) => {
    // If no files are found, respond with a 400 Bad Request error.
    if(!req.files) return res.status(400).json({ status: "error", message: "Missing files" })
    // Otherwise, it calls next() to continue
    next()
}

module.exports = filesPayloadExists