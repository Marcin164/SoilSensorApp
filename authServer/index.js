import * as dotenv from 'dotenv'
dotenv.config()
import express, { json } from "express";
import cors from "cors";
import authRoutes from './routes/auth.routes.js';
import pool from "./helpers/db.js"

const app = express()

const PORT = 4000;

app.use(cors())
app.use(json());

pool.getConnection((err, connection) => {
    if(err) throw err;
    console.log('connected as id ' + connection.threadId);
    app.listen(PORT, () => console.log("Running on port " + PORT))
});

app.use(authRoutes)