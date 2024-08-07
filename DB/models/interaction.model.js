import mongoose, { Schema , model} from "mongoose";
import BaseModel from "./base.model.js";

const interactionSchema = new Schema({
    ip : {
        type: String,
        required: true,
    },
    action : {
        type: String,
        required: true,
    }
},{
        timestamps: true,
        versionKey: false,
});

export const Interaction = mongoose.models.Interaction || model('Interaction', interactionSchema);

export class InteractionModel extends BaseModel {
    constructor(database) {
        super(database, "interaction");
    }

    //TODO : any additional methods to be added
    async getInteractionHistory() {
        const interactions = await this.database.getInteractionHistory();
        return interactions;
    }
 
}

