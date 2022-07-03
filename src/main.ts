import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    methods: 'GET,PUT,POST,PATCH,DELETE',
    credentials: true,
    origin: 'http://localhost:3000',
  });
  app.setGlobalPrefix('api');
  await app.listen(PORT);
}
bootstrap().then(() => {
  console.log(`Server running on port ${PORT}`);
});
