import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from '../../domain/entities/Course';
import { CreateModalidadeDto } from './models/create-modalidade.dto';
import { UpdateModalidadeDto } from './models/update-modalidade.dto';

@Injectable()
export class ModalidadeService {
  constructor(
    @InjectRepository(Course)
    private modalidadeRepo: Repository<Course>,
  ) {}

  create(dto: CreateModalidadeDto) {
    const modalidade = this.modalidadeRepo.create(dto);
    return this.modalidadeRepo.save(modalidade);
  }

  findAll() {
    return this.modalidadeRepo.find();
  }

  findOne(id: number) {
    return this.modalidadeRepo.findOneBy({ id });
  }

  update(id: number, dto: UpdateModalidadeDto) {
    return this.modalidadeRepo.update(id, dto);
  }

  remove(id: number) {
    return this.modalidadeRepo.delete(id);
  }
}
