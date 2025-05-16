import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/Entities/User';
import { AbsenceController, AppController } from './app.controller';
import * as dotenv from 'dotenv';
import { AbsenceService } from './absence/absence.service';
import { AbsenceModule } from './absence/absence.module';
import { Absence } from './absence/Entities/Absence';
import { AbsenceTypeModule } from './absence/absencetype.modules';
import { AbsenceTypeService } from './absence/absencetype.service';
dotenv.config();

console.log('DB config:', {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD,
  db: process.env.DB_NAME,
});

@Module({
  imports: [
    AuthModule,
    UsersModule,
    AbsenceModule,
    AbsenceTypeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '0'),
      username: process.env.DB_USER,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: false,
      retryDelay: 3000,
      logging: ['query', 'error'],
      logger: 'advanced-console',
    }),
    TypeOrmModule.forFeature([User, Absence]),
  ],
  controllers: [AppController, AbsenceController],
  providers: [AppService, AbsenceService, AbsenceTypeService],
})
export class AppModule {}
