import { Controller, Get, Post, Put, Delete, Req, Body, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { CreateDeviceDto, UpdateDeviceDto } from 'src/dto/device.dto'
import { AuthGuard } from 'src/guards/auth.guard'
import { DevicesService } from 'src/services/device.service'

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @UseGuards(AuthGuard)
  @Get('/:accountId')
  async findAll(@Req() req: Request): Promise<any> {
    return this.devicesService.findAll(req.params.accountId)
  }

  @UseGuards(AuthGuard)
  @Get('/:accountId/:id')
  async findById(@Req() req: Request): Promise<any> {
    return this.devicesService.findById(req.params.id)
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  async remove(@Req() req: Request): Promise<any> {
    return this.devicesService.delete(req.params.id)
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() body: CreateDeviceDto): Promise<any> {
    return this.devicesService.create(body)
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  async update(@Req() req: Request, @Body() body: UpdateDeviceDto): Promise<any> {
    return this.devicesService.update(req.params.id, body)
  }
}
