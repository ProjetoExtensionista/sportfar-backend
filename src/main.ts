import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { installCORS } from './installers/cors';
import { installSwagger } from './installers/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  installSwagger(app);
  installCORS(app);

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
