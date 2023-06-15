import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Device } from 'src/schemas/device.schema'
import { CreateDeviceDto, UpdateDeviceDto } from 'src/dto/device.dto'

@Injectable()
export class DevicesService {
  constructor(@InjectModel(Device.name) private deviceModel: Model<Device>) {}

  async findAll(): Promise<Device[]> {
    return this.deviceModel.find().exec()
  }

  async findById(id: string): Promise<Device> {
    return this.deviceModel.findById(id).exec()
  }

  async delete(id: string): Promise<Device> {
    return this.deviceModel.findByIdAndDelete(id).exec()
  }

  async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    const createdDevice = new this.deviceModel(createDeviceDto)
    return createdDevice.save()
  }

  async update(id: string, updateDeviceDto: UpdateDeviceDto): Promise<Device> {
    return this.deviceModel.findByIdAndUpdate(id, updateDeviceDto).exec()
  }
}
