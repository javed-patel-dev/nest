import { Injectable } from '@nestjs/common';
import { TodoList } from './db.dto';

@Injectable()
export class TodoService {
  public todos: TodoList[] = [];

  listAll() {
    return this.todos;
  }

  listById(id: string) {
    return this.todos.find((todo) => todo.id == id);
  }

  CreateTodo(todo: TodoList) {
    todo.id = Date.now().toString();
    this.todos.push(todo);
    return this.todos;
  }

  UpdateTodo(id: string, todo: TodoList) {
    const index = this.todos.findIndex((todo) => todo.id == id);
    todo.id = id;
    this.todos[index] = todo;
    return this.todos;
  }

  DeleteTodo(id: string) {
    const index = this.todos.findIndex((todo) => todo.id == id);
    this.todos.splice(index, 1);
    return this.todos;
  }
}
