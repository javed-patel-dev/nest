import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { ChatModule } from './chat/chat.module';

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
