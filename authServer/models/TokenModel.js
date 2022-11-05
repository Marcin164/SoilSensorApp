import pool from "../helpers/db.js"
import crypto from 'crypto'

export const saveToDatabase = async (refreshToken) => {
    const query = `INSERT INTO tokens (id, token, created_at) VALUES ('${crypto.randomUUID()}', '${new Date().getTime()}','${refreshToken}')`
    const result = new Promise((resolve, reject) => {
        pool.query(query, (err, response) => {
            if(err) reject(err)
            resolve(response)
        })
    })

    if(!result) throw "No data"
    return result
}

export const checkIfTokenExists = async (refreshToken) => {
    const query = `SELECT token FROM tokens WHERE token='${refreshToken}'`
    const token = new Promise((resolve, reject) => {
        pool.query(query, (err, response) => {
            if(err) reject(err)
            resolve(response)
        })
    })

    if(!token) throw "No valid token!"

    return true
}