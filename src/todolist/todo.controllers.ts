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
import { TodoService } from './todo.service';
import { TodoList } from './db.dto';
import { createTodoSchema, updateTodoSchema } from './pipeline';
import { CustomResponse } from 'utils/customRes';
import { ZodValidationPipe } from 'utils/zodValidation';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('/')
  getTodos() {
    return CustomResponse.success(this.todoService.listAll(), 'success', 200);
  }

  @Get('/:id')
  getTodoById(@Param('id') id: string) {
    return CustomResponse.success(
      this.todoService.listById(id),
      'success',
      200,
    );
  }

  @Post('/')
  @UsePipes(new ZodValidationPipe(createTodoSchema))
  createTodo(@Body() todo: TodoList) {
    return CustomResponse.success(
      this.todoService.CreateTodo(todo),
      'success',
      200,
    );
  }

  @Put('/:id')
  @UsePipes(new ZodValidationPipe(updateTodoSchema))
  updateTodo(@Param('id') id: string, @Body() todo: TodoList) {
    return CustomResponse.success(
      this.todoService.UpdateTodo(id, todo),
      'success',
      200,
    );
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return CustomResponse.success(
      this.todoService.DeleteTodo(id),
      'success',
      200,
    );
  }
}
