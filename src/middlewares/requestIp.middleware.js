import requestIp from 'request-ip';
import { ErrorClass } from '../utils/error-class.utils.js';

/**
 * @returns {object} Request
 * @description middleware to get user's ip address
 */

const UsertIp = ()=>{
    return (req, res, next) => {
        const userIp = requestIp.getClientIp(req);
        if (!userIp) {
            return next(new ErrorClass("User Ip not found",400));
        }
        req.userId = userIp;  
        next();
    }
}

export default UsertIp;
