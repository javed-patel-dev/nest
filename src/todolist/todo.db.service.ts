import { Injectable } from '@nestjs/common';
import Todo from '../models/todo';

@Injectable()
export class TodoService {
  async findAllAndCount(): Promise<{ todos: any[]; count: number }> {
    const todos = await Todo.find();
    const count = await Todo.countDocuments();
    return { count, todos };
  }

  async findOne(id: string): Promise<any> {
    return await Todo.findById(id);
  }

  async create(todoData: any): Promise<any> {
    const newTodo = new Todo(todoData);
    return await newTodo.save();
  }

  async update(id: string, updateData: any): Promise<any> {
    return await Todo.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id: string): Promise<any> {
    return await Todo.findByIdAndDelete(id);
  }
}
