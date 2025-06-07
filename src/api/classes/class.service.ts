import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Class } from '../../domain/entities/Class';
import { CreateClassDto } from './models/createClass.dto';
import { UpdateClassDto } from './models/updateClass.dto';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private classRepo: Repository<Class>,
  ) {}

  create(dto: CreateClassDto) {
    const model = this.classRepo.create(dto);
    return this.classRepo.save(model);
  }

  findAll() {
    return this.classRepo.find();
  }

  findOne(id: number) {
    return this.classRepo.findOneBy({ id });
  }

  update(id: number, dto: UpdateClassDto) {
    return this.classRepo.update(id, dto);
  }

  remove(id: number) {
    //TODO: validar se pode excluir todas as aulas que tem uma modalidade quando exclui uma modalidade
    return this.classRepo.delete(id);
  }
}
