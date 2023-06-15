import { Controller, Get, Post, Put, Delete, Body, Req } from '@nestjs/common'
import { Request } from 'express'
import { CreateDataDto, UpdateDataDto } from 'src/dto/data.dto'
import { DataService } from 'src/services/data.service'

@Controller('data')
export class DataController {
  constructor(private dataService: DataService) {}

  @Get()
  async findAll(): Promise<any> {
    return this.dataService.findAll()
  }

  @Post()
  async create(@Body() body: CreateDataDto): Promise<any> {
    return this.dataService.create(body)
  }

  @Put('/:id')
  async update(@Req() req: Request, @Body() body: UpdateDataDto): Promise<any> {
    return this.dataService.update(req.params.id, body)
  }

  @Delete('/:id')
  async remove(@Req() req: Request): Promise<any> {
    return this.dataService.delete(req.params.id)
  }
}
