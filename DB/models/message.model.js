import { Schema, model } from "mongoose";
import { Roles } from "../../src/utils/enums.utils.js";
import BaseModel from "./base.model.js";

const  messageSchema = new Schema({
    userId :{
        type: String,
        required: true,
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

const Message = model("Message", messageSchema);

class MessageModel extends BaseModel {
    constructor(database) {
        super(database, "message");
    }
    
    async getUserMessageHistory(userId) {
        const messages = await this.database.getUserMessageHistory(userId);
        return messages;
    }
}
  
export { MessageModel, Message };