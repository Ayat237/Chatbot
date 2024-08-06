import mongoose, { Schema , model } from "mongoose";
import { Roles } from "../../src/utils/enums.utils.js";


const  messageSchema = new Schema({
    userId :{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    role : {
        type: String,
        enum: Object.values(Roles),
        required: true
    },
    message:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

export const messageModel = mongoose.models.messageModel || model('message', messageSchema);