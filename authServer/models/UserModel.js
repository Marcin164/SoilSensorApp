import pool from "../helpers/db.js"
import argon2 from "argon2"
import jwt from "jsonwebtoken"

export const logIn = async (email, password) => {
    const query = `SELECT id, email, password, isActive FROM users WHERE email='${email}'`
    const user = await new Promise((resolve, reject) => {
        pool.query(query, (err, response) => {
            if(err) reject(err)
            resolve(response)
        })
    })

    if (!user) throw "Wrong email or password"

    const isMatch = await argon2.verify(user[0].password, password) 

    if(!isMatch) throw "Wrong email or password"

    const accessToken = jwt.sign({userId:user[0].id}, process.env.ACCESS, {expiresIn: "15m"})
    const refreshToken = jwt.sign({userId:user[0].id}, process.env.REFRESH)
    const isActive = user.isActive

    return {accessToken, refreshToken, isActive}
}
