import * as dotenv from 'dotenv'
dotenv.config()
import express, { json }  from "express"
import cors from "cors"
import pool from "./helpers/db.js"
import sensorRouter from "./routes/sensor.routes.js"
import devicesRouter from "./routes/devices.routes.js"

const app = express()

app.use(cors())
app.use(json());

pool.getConnection((err, connection) => {
    if(err) throw err;
    console.log('connected as id ' + connection.threadId);
    app.listen(process.env.PORT, () => console.log("Running on port " + process.env.PORT))
});

app.use(devicesRouter)
app.use(sensorRouter)