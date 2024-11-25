import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './user.service';
import { Users } from './db.dto';
import { createUserSchema } from './pipeline';
import { CustomResponse } from 'utils/customRes';
import { ZodValidationPipe } from 'utils/zodValidation';

@Controller('users')
export class UserController {
  constructor(private appService: AppService) {}

  //get all user
  @Get('/')
  getUsers() {
    return CustomResponse.success(this.appService.Users(), 'success', 200);
  }

  //get user by id
  @Get('/:id')
  getUserById(@Param('id') id: string) {
    return CustomResponse.success(this.appService.UserById(id), 'success', 200);
  }

  //create user
  @Post('/')
  @UsePipes(new ZodValidationPipe(createUserSchema))
  createUser(@Body() user: Users) {
    return CustomResponse.success(
      this.appService.CreateUser(user),
      'success',
      200,
    );
  }

  //update user
  @Put('/:id')
  @UsePipes(new ZodValidationPipe(createUserSchema))
  updateUser(@Param('id') id: string, @Body() user: Users) {
    return CustomResponse.success(
      this.appService.UpdateUser(id, user),
      'success',
      200,
    );
  }

  //delete user
  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return CustomResponse.success(
      this.appService.DeleteUser(id),
      'success',
      200,
    );
  }
}
