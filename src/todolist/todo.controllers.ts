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
import { TodoService } from './todo.db.service';
import { TodoList } from './db.dto';
import { createTodoSchema, updateTodoSchema } from './pipeline';
import { CustomResponse } from 'src/utils/customRes';
import { ZodValidationPipe } from 'src/utils/zodValidation';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('/')
  async getTodos() {
    return CustomResponse.success(
      await this.todoService.findAllAndCount(),
      ReasonPhrases.OK,
      StatusCodes.OK,
    );
  }

  @Get('/:id')
  async getTodoById(@Param('id') id: string) {
    return CustomResponse.success(
      await this.todoService.findOne(id),
      ReasonPhrases.OK,
      StatusCodes.OK,
    );
  }

  @Post('/')
  @UsePipes(new ZodValidationPipe(createTodoSchema))
  async createTodo(@Body() todo: TodoList) {
    return CustomResponse.success(
      await this.todoService.create(todo),
      ReasonPhrases.OK,
      StatusCodes.OK,
    );
  }

  @Put('/:id')
  @UsePipes(new ZodValidationPipe(updateTodoSchema))
  async updateTodo(@Param('id') id: string, @Body() todo: TodoList) {
    return CustomResponse.success(
      await this.todoService.update(id, todo),
      ReasonPhrases.OK,
      StatusCodes.OK,
    );
  }

  @Delete('/:id')
  async deleteTodo(@Param('id') id: string) {
    return CustomResponse.success(
      await this.todoService.delete(id),
      ReasonPhrases.OK,
      StatusCodes.OK,
    );
  }
}
