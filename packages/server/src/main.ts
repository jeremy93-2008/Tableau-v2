import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { configDotenv } from 'dotenv';

configDotenv();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  await app.listen(4200, '0.0.0.0');
}
bootstrap();
