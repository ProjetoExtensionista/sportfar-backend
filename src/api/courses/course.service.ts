import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from '../../domain/entities/Course';
import { CreateCourseDto } from './models/createCourse.dto';
import { UpdateCourseDto } from './models/updateCourse.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepo: Repository<Course>,
  ) {}

  create(dto: CreateCourseDto) {
    const course = this.courseRepo.create(dto);
    return this.courseRepo.save(course);
  }

  findAll() {
    return this.courseRepo.find();
  }

  findOne(id: number) {
    return this.courseRepo.findOneBy({ id });
  }

  update(id: number, dto: UpdateCourseDto) {
    return this.courseRepo.update(id, dto);
  }

  remove(id: number) {
    //TODO: validar se pode excluir todas as aulas que tem uma modalidade quando exclui uma modalidade
    return this.courseRepo.delete(id);
  }
}
