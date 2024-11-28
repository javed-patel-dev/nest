import * as dotenv from 'dotenv';
import connectToDatabase from './db/index';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  await connectToDatabase();
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
