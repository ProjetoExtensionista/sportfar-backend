import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { installSwagger } from './installers/swagger';

async function bootstrap() {
  console.log(process.env.DB_USER);

  const app = await NestFactory.create(AppModule);

  installSwagger(app);

  const port = process.env.PORT || 5000;
  await app.listen(port);

  return await app.getUrl();
}

void (async (): Promise<void> => {
  try {
    const url = await bootstrap();
    Logger.log(`Started and listening to: ${url}`, 'Bootstrap');
  } catch (error) {
    Logger.error(error, 'Bootstrap');
  }
})();
