import { Controller, Get, Post, Put, Delete, Req, Body } from '@nestjs/common'
import { Request } from 'express'
import { CreateUserDto, UpdateUserDto } from 'src/dto/user.dto'
import { UsersService } from 'src/services/user.service'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<any> {
    return this.usersService.findAll()
  }

  @Get('/:id')
  async findById(@Req() req: Request): Promise<any> {
    return this.usersService.findById(req.params.id)
  }

  @Delete('/:id')
  async remove(@Req() req: Request): Promise<any> {
    return this.usersService.delete(req.params.id)
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.usersService.create(createUserDto)
  }

  @Put('/:id')
  async update(@Req() req: Request, @Body() updateUserDto: UpdateUserDto): Promise<any> {
    return this.usersService.update(req.params.id, updateUserDto)
  }
}
