import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type DataDocument = HydratedDocument<Data>

/* eslint-disable */
@Schema()
export class Data {
  @Prop()
  id: string

  @Prop()
  userId: string

  @Prop()
  deviceId: string

  @Prop()
  type: string

  @Prop()
  value: number
}

export const DataSchema = SchemaFactory.createForClass(Data)
