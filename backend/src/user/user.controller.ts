import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("create-user")
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get("liste-user")
  findAll() {
    return this.userService.findAll();
  }

  @Get('deatil-user/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }


  @Delete('delete-user/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
