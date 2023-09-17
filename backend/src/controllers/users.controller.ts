import { Controller, Get, Post, Put, Delete, Req, Body, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { CreateUserDto, UpdateUserDto } from 'src/dto/user.dto'
import { AuthGuard } from 'src/guards/auth.guard'
import { UsersService } from 'src/services/user.service'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<any> {
    return this.usersService.findAll()
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  async findById(@Req() req: Request): Promise<any> {
    return this.usersService.findById(req.params.id)
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  async remove(@Req() req: Request): Promise<any> {
    return this.usersService.delete(req.params.id)
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.usersService.create(createUserDto)
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  async update(@Req() req: Request, @Body() updateUserDto: UpdateUserDto): Promise<any> {
    return this.usersService.update(req.params.id, updateUserDto)
  }
}
