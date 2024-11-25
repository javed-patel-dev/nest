import { MiddlewareConsumer, Module, NestMiddleware } from '@nestjs/common';
import { UserController } from './user.controllers';
import { AppService } from './user.service';
import { NextFunction } from 'express';

@Module({
  controllers: [UserController],
  providers: [AppService],
  exports: [],
})
export class UsersModule {
  constructor() {
    console.log('UsersModule');
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(userMiddleware).forRoutes(UserController);
  }
}

export class userMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('UserMiddleware');
    next();
  }
}
