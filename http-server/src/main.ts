import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import './instrument';
import * as Sentry from '@sentry/node';
import { BaseExceptionFilter, HttpAdapterHost } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  Sentry.setupNestErrorHandler(app, new BaseExceptionFilter(httpAdapter));
  // app.use(async function (err) {
  //   throw new Error('My first Sentry error!');
  // });
  await app.listen(4000);
}
bootstrap();
