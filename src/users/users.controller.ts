import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('api/v1')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    await this.usersService.create(body);
  }

  @Get('/users')
  async findAllUsers() {
    return await this.usersService.findAll();
  }

  @Get('/users/:id')
  async findUser(@Param('id') id: number) {
    return await this.usersService.findOne(id);
  }
}
