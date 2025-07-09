import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";


dotenv.config({
    path: "./.env"
})

const app = express();


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port:${process.env.PORT}`);
    })
    app.on("Error", (error) => {
        console.log("ERROR:", error);
        throw error;
        
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed bro", err);
    
})




















/** 
import express from "express";
const app = express();


;(() => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error
            
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw error;
        
    }
})()
    */