import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Data } from 'src/schemas/data.schema'
import { CreateDataDto, UpdateDataDto } from 'src/dto/data.dto'

@Injectable()
export class DataService {
  constructor(@InjectModel(Data.name) private dataModel: Model<Data>) {}

  async findAll(): Promise<Data[]> {
    return this.dataModel.find().exec()
  }

  async create(createDataDto: CreateDataDto): Promise<Data> {
    const createdData = new this.dataModel(createDataDto)
    return createdData.save()
  }

  async update(id: string, updateDataDto: UpdateDataDto): Promise<Data> {
    return this.dataModel.findByIdAndUpdate(id, updateDataDto).exec()
  }

  async delete(id: string): Promise<Data> {
    return this.dataModel.findByIdAndDelete(id).exec()
  }
}
