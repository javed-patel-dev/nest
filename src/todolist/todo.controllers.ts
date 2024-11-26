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
import { CustomResponse } from 'src/utils/customRes';
import { ZodValidationPipe } from 'src/utils/zodValidation';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

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
      ReasonPhrases.OK,
      StatusCodes.OK,
    );
  }

  @Post('/')
  @UsePipes(new ZodValidationPipe(createTodoSchema))
  createTodo(@Body() todo: TodoList) {
    return CustomResponse.success(
      this.todoService.CreateTodo(todo),
      ReasonPhrases.OK,
      StatusCodes.OK,
    );
  }

  @Put('/:id')
  @UsePipes(new ZodValidationPipe(updateTodoSchema))
  updateTodo(@Param('id') id: string, @Body() todo: TodoList) {
    return CustomResponse.success(
      this.todoService.UpdateTodo(id, todo),
      ReasonPhrases.OK,
      StatusCodes.OK,
    );
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return CustomResponse.success(
      this.todoService.DeleteTodo(id),
      ReasonPhrases.OK,
      StatusCodes.OK,
    );
  }
}
