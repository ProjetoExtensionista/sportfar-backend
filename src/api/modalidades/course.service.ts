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
    private modalidadeRepo: Repository<Course>,
  ) {}

  create(dto: CreateCourseDto) {
    const modalidade = this.modalidadeRepo.create(dto);
    return this.modalidadeRepo.save(modalidade);
  }

  findAll() {
    return this.modalidadeRepo.find();
  }

  findOne(id: number) {
    return this.modalidadeRepo.findOneBy({ id });
  }

  update(id: number, dto: UpdateCourseDto) {
    return this.modalidadeRepo.update(id, dto);
  }

  remove(id: number) {
    //TODO: validar se pode excluir todas as aulas que tem uma modalidade quando exclui uma modalidade
    return this.modalidadeRepo.delete(id);
  }
}
