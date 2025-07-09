import multer from "multer";

// Configure multer for file uploads
// This middleware will save the uploaded files to the "./public/temp" directory
const storage = multer.diskStorage({
    // Destination for the uploaded files
    // The files will be saved in the "temp" folder inside the "public" directory
    destination: function (req, file, cb) {
        // The destination folder for the uploaded files
        // You can change this path to any other folder as per your requirement
      cb(null, "./public/temp") // This is the folder where files will be saved
    },
    // Filename for the uploaded files
    filename: function (req, file, cb) { // file is the uploaded file object
        // The original name of the file will be used as the filename
      // You can modify the filename here if you want to change it
      cb(null, file.originalname) // This will save the file with its original name
    }
  })
  
export const upload = multer({ 
    storage, 
})