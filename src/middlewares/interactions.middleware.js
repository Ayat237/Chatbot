import database from "../../db/databaseConnection.js";
import { InteractionModel } from "../../DB/models/interaction.model.js";

const Interaction = new InteractionModel(database);

export const  trackInteractions = ()=>{
    return async (req, res, next)=>{
        const userIp = req.userId;
        const action = req.originalUrl;

        const newInteration = await Interaction.create({
            ip : userIp,
            action
        })
        console.log(`Logged interaction: ${userIp} visited ${action}`);
        next();
    }
}