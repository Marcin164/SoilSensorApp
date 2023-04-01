import * as dotenv from 'dotenv'
dotenv.config()
import express, { json }  from "express"
import mqtt from 'mqtt'
import cors from "cors"
import { Server } from "socket.io"
import http from 'http'
import pool from "./helpers/db.js"
import sensorRouter from "./routes/sensor.routes.js"
import devicesRouter from "./routes/devices.routes.js"
import { fetchData, insertData } from './sockets/data.handler.js'

const app = express()
http.Server(app) 

app.use(cors())
app.use(json());

const mqttClient = mqtt.connect()

const io = new Server(http);

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('data:insert', insertData)
    socket.emit('data:fetch', fetchData)
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

pool.getConnection((err, connection) => {
    if(err) throw err;
    console.log('connected as id ' + connection.threadId);
    app.listen(process.env.PORT, '0.0.0.0')
});

app.use(devicesRouter)
app.use(sensorRouter)