import { io } from 'socket.io-client'

export const socket = io('http://localhost:3001')

socket.on('connect', () => {
  console.log(socket.id)
  console.log('connected')
})

socket.on('disconnect', () => {
  console.log('disconnected')
})
