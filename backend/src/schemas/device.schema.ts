import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type DeviceDocument = HydratedDocument<Device>

/* eslint-disable */
@Schema({ timestamps: true })
export class Device {
  @Prop()
  id: string

  @Prop()
  userId: string

  @Prop()
  name: string

  @Prop()
  plant: string

  @Prop()
  soil: string

  @Prop()
  city: string

  @Prop()
  street: string

  @Prop()
  lat: number

  @Prop()
  lng: number

  @Prop()
  isConnected: boolean

  @Prop()
  watering: string
}

export const DeviceSchema = SchemaFactory.createForClass(Device)
