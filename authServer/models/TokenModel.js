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
    const selectQuery = `SELECT token FROM tokens`
    const token = new Promise((resolve, reject) => {
        pool.query(selectQuery, (err, response) => {
            if(err) reject(err)
            resolve(response)
        })
    })

    if(!token) throw "No valid token!"

    const deleteQuery = `DELETE FROM tokens WHERE token='${refreshToken}'`
    const result = new Promise((resolve, reject) => {
        pool.query(deleteQuery, (err, response) => {
            if(err) reject(err)
            resolve(response)
        })
    })

    if(result) throw "Cannot delete token"

    return true
}