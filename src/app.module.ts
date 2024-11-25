import { Module } from '@nestjs/common';
import { UserController } from './users/app.controllers';
import { AppService } from './users/app.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('AppModule');
  }
}
