import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function installSwagger<T>(app: INestApplication<T>) {
  const config = new DocumentBuilder()
    .setTitle('Sportfar backend')
    .setDescription('Backend da aplicação Sportfar')
    .setVersion('1.0-alpha')
    .addBearerAuth()
    .build();

  const documentFactory = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);
}
