import * as dotenv from "dotenv";
import express, { json } from "express";
import mqtt from "mqtt";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
import pool from "./helpers/db.js";
dotenv.config();

const app = express();
http.Server(app);

app.use(cors());
app.use(json());

const mqttClient = mqtt.connect();

const io = new Server(http);

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  app.listen(process.env.PORT, "0.0.0.0");
});
