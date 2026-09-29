import {userModel} from '../models/user.model.js'
import {readAccessToken} from '../utils/auth.util.js'
import {blacklistModel} from '../models/blacklist.model.js'

export const authenticate = async (req, res, next)=>{

    try{
        const token = req.headers.authorization.split(' ')[1]
            
        if(!token){
            return res.status(404).json({
                message: "No access token Found"
            })
        }

        const blacklisted = await blacklistModel.findOne({token})

        if(blacklisted){
            return res.status(400).json({
                message: "Access token expired"
            })
        }

        const {id} = readAccessToken(token)
        req.user = id
        next()

    }catch(err){
        console.log(err);
        return res.status(400).json({
            message: "Invalid access token",
            errors: err
        })
    }
}

export const authorization = async (req, res, next)=>{

    const user = req.user;

    if(!user || user.role != "seller"){
        return res.status(403).json({
            message: "User not permitted to perform the task"
        })
    }

    next()

}
