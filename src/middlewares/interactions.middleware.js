import {database} from "../../DB/databaseConnection.js";
import { InteractionModel } from "../../DB/models/interaction.model.js";

const Interaction = new InteractionModel(database);

/**
 * @returns {object} Request
 * @description middleware to save interaction 
 */

export const  trackInteractions = ()=>{
    return async (req, res, next)=>{
        const userIp = req.userId;
        const action = req.originalUrl;

        await Interaction.create({
            ip : userIp,
            action
        })

        next();
    }
}