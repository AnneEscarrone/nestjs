import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './httpHelper/http-all-exceptions-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  app.useGlobalFilters(new AllExceptionsFilter());


  await app.listen(3000);
}
bootstrap();
