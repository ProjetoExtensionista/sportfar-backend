import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/domain/entities/Company';
import { Course } from 'src/domain/entities/Course';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Company])],
  controllers: [CourseController],
  providers: [CourseService],
})
export class ModalidadeModule {}
