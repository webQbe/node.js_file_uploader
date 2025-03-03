/* Restrict file size to a maximum of 2MB. */
const MB = 2;
const FILE_SIZE_LIMIT = MB * 1024 * 1024;

const fileSizeLimiter = (req, res, next) => {

    // Get files from the request
    const files = req.files
    // Define array to store larger files list
    const filesOverLimit = []

    // Loop through each file and checks its size
    Object.keys(files).forEach(key => {
        // Check if current file is larger than 2MB
        if(files[key].size > FILE_SIZE_LIMIT){
            // Add current file to the array
            filesOverLimit.push(files[key].name)
        }
    })

    /* Generate Error Message */
    if (filesOverLimit.length){
        const properVerb = filesOverLimit.length > 1 ? 'are' : 'is';

        const sentence = `Upload failed! ${filesOverLimit.toString()} ${properVerb} over the file size limit of ${MB} MB.`.replaceAll(",", ", ");

        const message = filesOverLimit.length < 3
            ? sentence.replace(",", " and")
            : sentence.replace(/,(?=[^,]*$)/, " and");

        // Respond with a 413 Payload Too Large error and the message
        return res.status(413).json({ status: "error", message });

    }

    next()
}

module.exports = fileSizeLimiter