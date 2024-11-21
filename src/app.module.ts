import { Module } from '@nestjs/common';
import { ChatModule } from './chat.module';
import { OrderModule } from './order.module';
import { UserModule } from './user.module';

@Module({
  imports: [UserModule, OrderModule, ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('AppModule');
  }
}
