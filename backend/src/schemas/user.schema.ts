import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document

/* eslint-disable */
@Schema()
export class User {
  @Prop()
  id: string

  @Prop()
  name: string

  @Prop()
  password: string

  @Prop()
  email: string

  @Prop()
  isActive: boolean

  @Prop()
  settings: string
}

export const UserSchema = SchemaFactory.createForClass(User)
