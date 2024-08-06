import mongoose, { Schema , model } from "mongoose";


const  userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim : true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['user', 'system'],
        default: 'user'
    }
},{
    timestamps: true
})

export const userModel = mongoose.models.userModel || model('user', userSchema);