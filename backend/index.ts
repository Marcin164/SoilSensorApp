import express, { json } from 'express'
import cors from 'cors'
import pool from './helpers/db.js'
// dotenv.config()

const app = express()

app.use(cors())
app.use(json())

pool.getConnection((err: any, connection: any) => {
  if (err) throw err
  console.log('connected as id ' + connection.threadId)
  app.listen(process.env.PORT, () => {
    '0.0.0.0'
  })
})
