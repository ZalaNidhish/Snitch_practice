import bcrypt from 'bcrypt'
import {userModel} from '../models/user.model.js'
import {blacklistModel} from '../models/blacklist.model.js'
import {createTokens, readRefressToken} from '../utils/auth.util.js'

export const loginUserController = async (req, res) => {

    const {email, password} = req.body

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const verify = await bcrypt.compare(password, user.password)

    if(!verify){
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const {accessToken, refressToken} = createTokens(user._id)

    await userModel.findByIdAndUpdate(user._id, {refressToken})

    res.cookie("refressToken", refressToken, {httpOnly: true})

    return res.status(200).json({
        message: "User logged in successfully",
        data: {
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            },
            accessToken
        }
    })
}

export const registerUserController = async (req, res)=>{

    const {name, email, password} = req.body

    const alreadyUser = await userModel.findOne({email})

    if(alreadyUser){
        return res.status(400).json({
            message: "User Already exists with this email"
        })
    }

    const user = await userModel.create({
        email,
        name,
        password: await bcrypt.hash(password, 2)
    })

    const {accessToken, refressToken} = createTokens(user._id)

    await userModel.findByIdAndUpdate(user._id, {refressToken})

    res.cookie("refressToken", refressToken)

    return res.status(200).json({
        message: "User created successfully",
        data: {
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            },
            accessToken
        }
    })

}

export const logoutUserController = async (req, res)=>{

    const id = req.user

    const user = await userModel.findByIdAndUpdate(id, {refressToken: null})

    if(!user){
        return res.status(400).json({
            message: "User not found"
        })
    }

    res.cookie("refressToken",'')

    await blacklistModel.create({
        token: req.headers.authorization.split(' ')[1],
        user: user._id
    })
    
    return res.status(200).json({
        message: "User logged out"
    })

}

export const getmeController = async (req, res)=> {
    
    const id = req.user

    const user = await userModel.findById(id)

    return res.status(200).json({
        message: "User fetched",
        data: {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        }
    })

}

export const refreshController = async (req, res) => {

    try{
        const refressToken = req.cookies.refressToken

        console.log(refressToken);
        
        if(!refressToken){
            await userModel.findByIdAndUpdate(id, {refressToken: null})
            return res.status(404).json({
                message: "Refress token not found"
            })
        } 

        const {id} = readRefressToken(refressToken)

        const user = await userModel.findById(id)
        
        if(refressToken !== user.refressToken){
            await userModel.findByIdAndUpdate(id, {refressToken: null})
            return res.status(400).json({
                message: "Invalid refress token"
            })
        }

        const {accessToken, refressToken: newRefressToken} = createTokens(id)

        await userModel.findByIdAndUpdate(id, {refressToken: newRefressToken})

        res.cookie("refressToken", newRefressToken)

        return res.status(200).json({
            message: "Tokens rotated successfully",
            data: {
                accessToken
            }
        })

    }catch(err){
        console.log(err);
        return res.status(400).json({
            message: "Token rotation failed",
            errors: err
        })
    }



}
