import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/Entities/User';
import { AppController } from './app.controller';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '0'),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: false,
      retryDelay: 3000,
      logging: ['query', 'error'],
      logger: 'advanced-console',
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
