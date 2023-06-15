import { Controller, Get, Post, Put, Delete, Req, Body } from '@nestjs/common'
import { Request } from 'express'
import { CreateDeviceDto, UpdateDeviceDto } from 'src/dto/device.dto'
import { DevicesService } from 'src/services/device.service'

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Get()
  async findAll(): Promise<any> {
    return this.devicesService.findAll()
  }

  @Get('/:id')
  async findById(@Req() req: Request): Promise<any> {
    return this.devicesService.findById(req.params.id)
  }

  @Delete('/:id')
  async remove(@Req() req: Request): Promise<any> {
    return this.devicesService.delete(req.params.id)
  }

  @Post()
  async create(@Body() body: CreateDeviceDto): Promise<any> {
    return this.devicesService.create(body)
  }

  @Put('/:id')
  async update(@Req() req: Request, @Body() body: UpdateDeviceDto): Promise<any> {
    return this.devicesService.update(req.params.id, body)
  }
}
