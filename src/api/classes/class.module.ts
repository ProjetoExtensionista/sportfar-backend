import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from 'src/domain/entities/Class';
import { Course } from 'src/domain/entities/Course';
import { EducatorClass } from 'src/domain/entities/EducatorClass';
import { EducatorClassService } from '../educatorClass/educatorClass.service';
import { ClassController } from './class.controller';
import { ClassService } from './class.service';

@Module({
  imports: [TypeOrmModule.forFeature([Class, Course, EducatorClass])],
  controllers: [ClassController],
  providers: [ClassService, EducatorClassService],
})
export class ClassModule {}
