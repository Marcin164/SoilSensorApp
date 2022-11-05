import {checkIfTokenExists, saveToDatabase} from "../models/TokenModel.js"
import {logIn} from "../models/UserModel.js"
import jwt from 'jsonwebtoken'

export const login_post = async (req, res) => {
    try {
        let {email, password} = req.body
        const login = await logIn(email, password)
        await saveToDatabase(login.refreshToken)
        res.status(200).send({tokens: login, message:"Logged in succesfully", expires: new Date().getTime() + ( 15 * 60 * 60 )})
    } catch (error) {
        res.status(404).send(error)
    }
}

export const refreshToken_post = async (req, res) => {
    try {
        const {token} = req.body
        if(!token) throw "Invalid token"
        const isToken = await checkIfTokenExists()
        if(isToken) {
            const payload = await jwt.decode(token)
            console.log(payload)
            await jwt.verify(token, process.env.REFRESH)
            const accessToken = jwt.sign({userId:payload.userId}, process.env.ACCESS, {expiresIn: "15m"})
            res.send({accessToken, expires: new Date().getTime() + ( 15 * 60 * 60 )})
        }
    } catch (err) {
        res.status(401).send(err)
    }
}