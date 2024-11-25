import { MiddlewareConsumer, Module, NestMiddleware } from '@nestjs/common';
import { TodoController } from './todo.controllers';
import { TodoService } from './todo.service';
import { NextFunction } from 'express';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  exports: [],
})
export class TodoModule {
  constructor() {
    console.log('TodoModule');
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(todoMiddleware).forRoutes(TodoController);
  }
}

export class todoMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('todoMiddleware');
    next();
  }
}
