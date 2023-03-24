import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/create-user.dto';
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

  @Put('/users/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }

  @Delete('/users/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }
}
