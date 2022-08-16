const { SerialPort, ReadlineParser } = require('serialport')
const { Server } = require('socket.io')

const io = new Server({});

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


io.listen(3000);