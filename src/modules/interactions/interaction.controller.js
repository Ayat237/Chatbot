import database from "../../../db/databaseConnection.js";
import { Interaction, InteractionModel } from "../../../DB/models/interaction.model.js";


const interactionModel = new InteractionModel(database);



export const analytics = async (req, res, next)=>{

    const totalRequests = await interactionModel.getInteractionHistory();
    const uniqueIps = await Interaction.distinct('ip');
    const totalActions =  totalRequests.map(interaction => interaction.action)

    res.status(200).json({ 
        totalRequests,
        totalRequestsCount : totalRequests.length,
        uniqueIps,
        uniqueIpsCount : uniqueIps.length, 
        totalActions });

}