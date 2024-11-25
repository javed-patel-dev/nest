import { MiddlewareConsumer, Module, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UsersModule } from './users/user.module';
import { TodoModule } from './todolist/todo.module';

@Module({
  imports: [UsersModule, TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('AppModule');
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RootMiddleware).forRoutes('/');
  }
}

export class RootMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('RootMiddleware');
    next();
  }
}
