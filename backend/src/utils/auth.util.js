import jwt from 'jsonwebtoken'
import {config} from '../config/config.js'

export function createTokens(userID){

    const accessToken = jwt.sign({id: userID}, config.ACCESS_TOKEN_SECRET, {expiresIn: "15m"})
    const refressToken = jwt.sign({id: userID}, config.REFRESS_TOKEN_SECRET, {expiresIn: "7d"})

    return {accessToken, refressToken}
}

export function readAccessToken(token){
    const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET)
    return decoded
}

export function readRefressToken(token){
    const decoded = jwt.verify(token, config.REFRESS_TOKEN_SECRET)
    return decoded
}