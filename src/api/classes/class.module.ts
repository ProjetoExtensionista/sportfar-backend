import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from 'src/domain/entities/Class';
import { Course } from 'src/domain/entities/Course';
import { ClassController } from './class.controller';
import { ClassService } from './class.service';

@Module({
  imports: [TypeOrmModule.forFeature([Class, Course])],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
