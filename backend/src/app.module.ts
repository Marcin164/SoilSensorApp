import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './modules/users.module'
import { DevicesModule } from './modules/devices.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Root:CUErwk1d0cw4WGns@cluster0.ximda.mongodb.net/SoilSensorDB?retryWrites=true&w=majority'),
    UsersModule,
    DevicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
