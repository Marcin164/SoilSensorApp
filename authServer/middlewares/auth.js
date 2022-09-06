import jwt from "jsonwebtoken"
import JwtExpired from 'jwt-check-expiration'

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token === null) return res.status(401)

    if(JwtExpired.isJwtExpired(token)) return res.status(401).send("EXPIRED")

    try {
        jwt.verify(token, process.env.ACCESS, (err, user) => {
            if(err) throw err
            console.log(user)

            req.user = user
            next()
        })
    } catch (error) {
        console.log(error) 
    }
}

export default auth