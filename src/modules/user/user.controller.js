import { userModel } from "../../../DB/Model/user.model.js";
import { ErrorClass } from "../../utils/error-class.utils.js";


/**
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 * @returns {Object} status , message ,newUser
 * @api {post} /user -Create a new user in the database.
 */
export const  creatrUser = async(req, res, next) => {
    const { name, email, password } = req.body;

    const emailExist = await userModel.findOne({ email });
    if(emailExist) {
        return next(new ErrorClass("Email already exist", 400));
    }
    const user = {
        name,
        email,
        password
    };
    const newUser = await userModel.create(user);
    return res.status(201).json({
        status: "success",
        message : "user added successfully",
        newUser});
}