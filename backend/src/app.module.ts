import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './modules/users.module'
import { DevicesModule } from './modules/devices.module'
import { JwtModule } from '@nestjs/jwt'
import { DatasModule } from './modules/data.module'
import { DataGateway } from './websocket/websocket.gateway'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Root:CUErwk1d0cw4WGns@cluster0.ximda.mongodb.net/SoilSensorDB?retryWrites=true&w=majority'),
    UsersModule,
    DevicesModule,
    DatasModule,
    JwtModule.register({
      global: true,
      secret: 'access_secret',
    }),
  ],
  controllers: [],
  providers: [DataGateway],
})
export class AppModule {}
