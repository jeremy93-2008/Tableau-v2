import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { configDotenv } from 'dotenv';
import { AuthGlobalService } from './shared/services/auth.global.service';

configDotenv();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:4200'],
  });

  app.useGlobalGuards(new AuthGlobalService().getGuard());

  await app.listen(4200, '0.0.0.0');
}

bootstrap();
