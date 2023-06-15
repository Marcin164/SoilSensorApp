import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { DevicesController } from 'src/controllers/devices.controller'
import { Device, DeviceSchema } from 'src/schemas/device.schema'
import { DevicesService } from 'src/services/device.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: Device.name, schema: DeviceSchema }])],
  controllers: [DevicesController],
  providers: [DevicesService],
})
export class DevicesModule {}
