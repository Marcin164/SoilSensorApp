import {checkIfTokenExists, saveToDatabase} from "../models/TokenModel.js"
import {logIn} from "../models/UserModel.js"

export const login_post = async (req, res) => {
    try {
        let {email, password} = req.body
        const login = await logIn(email, password)
        await saveToDatabase(login.refreshToken)
        res.status(200).send({tokens: login, message:"Logged in succesfully", expires: new Date().getTime() + 15})
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
            const payload = jwt.decode(token)
            jwt.verify(token, process.env.REFRESH)
            const accessToken = jwt.sign({userId:payload.userId}, process.env.ACCESS, {expiresIn: "15m"})
            res.send({accessToken})
        }
    } catch (err) {
        res.status(401).send(err)
    }
}