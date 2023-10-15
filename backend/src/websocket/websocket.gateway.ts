import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

@WebSocketGateway({ cors: true })
export class DataGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server

  handleConnection(client: any) {
    console.log('websocket connected')
  }

  handleDisconnect(client: any) {
    console.log('websocket disconnected')
  }

  @SubscribeMessage('onMessage')
  onEvent(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    this.server.emit('onMessage', 'Hello websockets')
  }
}
