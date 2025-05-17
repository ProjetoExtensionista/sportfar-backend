import { INestApplication } from '@nestjs/common';

export function installCORS<T>(app: INestApplication<T>) {
  app.enableCors();
}
