import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)

//Pre-save hook to hash the password before saving the user
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
//before saving the user, we need to hash the password
    this.password = await bcrypt.hash(this.password, 10)
    next()
})
//isPasswordCorrect method to compare the password with the hashed password
//this method will be used to check if the password is correct or not mainly during login
//it will return true or false

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

//generateAccessToken method to generate the access token
//this method will be used to generate the access token for the user
//it will return the access token as a string
//the access token will be used to authenticate the user in the protected routes
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            //this is the payload of the token
            //we can add any data we want to the token
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            //this is the secret key used to sign the token
            //we can use any secret key we want
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

//generateRefreshToken method to generate the refresh token
//this method will be used to generate the refresh token for the user
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)