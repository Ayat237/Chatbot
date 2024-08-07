import { Schema } from "mongoose";
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


class MessageModel extends BaseModel {
    constructor(database) {
      super(database, "Message", messageSchema);
    }
  
    // Additional message-specific methods...
}
  
export default MessageModel;