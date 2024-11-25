import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Users } from './db.dto';

@Controller('users')
export class UserController {
  constructor(private appService: AppService) {}

  //get all user
  @Get('/')
  getUsers() {
    return this.appService.Users();
  }

  //get user by id
  @Get('/:id')
  getUserById(@Param('id') id: string) {
    return this.appService.UserById(id);
  }

  //create user
  @Post('/')
  createUser(@Body() user: Users) {
    return this.appService.CreateUser(user);
  }

  //update user
  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() user: Users) {
    return this.appService.UpdateUser(id, user);
  }

  //delete user
  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.appService.DeleteUser(id);
  }
}
