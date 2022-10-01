import mysql from 'mysql2'
import * as dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
})

export default pool