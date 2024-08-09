import {database} from "../../../DB/databaseConnection.js";
import { Interaction, InteractionModel } from "../../../DB/models/interaction.model.js";


const interactionModel = new InteractionModel(database);


/**
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns {Object} totalRequests,totalRequestsCount, uniqueIps, uniqueIpsCount, totalActions
 * @api {get} /analytics    get requests statistics for all actions 
 */
export const analytics = async (req, res, next)=>{

    const totalRequests = await interactionModel.getInteractionHistory();
    const uniqueIps = await interactionModel.getUniqueIps();
    const totalActions =  totalRequests.map(interaction => interaction.action)

    res.status(200).json({ 
        totalRequests,
        totalRequestsCount : totalRequests.length,
        uniqueIps,
        uniqueIpsCount : uniqueIps.length, 
        totalActions });

}