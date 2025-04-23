import { Module } from '@nestjs/common';
import { AppController, LoginController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

//TODO: Criar arquivo de configuração pro TypeORM Module
@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-db',
      port: 3306,
      username: 'user',
      password: 'userpass',
      database: 'myapp',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule {}
