if(process.env.TYPE !== "Production") require("dotenv").config()
const express = require("express")
const app = express()
const server = require("http").createServer(app)
const io = require("socket.io")(server, { cors: { origin: "*" }})
const { SerialPort } = require("serialport")
 
io.on("connection", (socket) => {
  console.log(socket)
});

const port = new SerialPort({
    path: 'COM3',
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
}).setEncoding('utf-8')

port.on('data', function(data){
  io.emit("sendSoilInfo", {data})
})


server.listen(process.env.PORT, () => {console.log(`Express is listening on port ${process.env.PORT}`)})