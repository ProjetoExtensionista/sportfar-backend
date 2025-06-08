import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Class } from '../../domain/entities/Class';
import { EducatorClassService } from '../educatorClass/educatorClass.service';
import { CreateClassDto } from './models/createClass.dto';
import { UpdateClassDto } from './models/updateClass.dto';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private classRepo: Repository<Class>,
    private educatorClassService: EducatorClassService,
  ) {}

  async insert(dto: CreateClassDto) {
    const model = await this.classRepo.save(this.classRepo.create(dto));

    await Promise.all(
      dto.educators.map((educator_id) =>
        this.educatorClassService.insert({
          educator_id,
          class_id: model.id,
        }),
      ),
    );

    return model;
  }

  findAll(): Promise<Class[] | null> {
    return this.classRepo.find();
  }

  findOne(id: number): Promise<Class | null> {
    return this.classRepo.findOneBy({ id });
  }

  findByCourse(course_id: number): Promise<Class[] | null> {
    return this.classRepo.find({ where: { course: { id: course_id } } });
  }

  update(id: number, dto: Partial<UpdateClassDto>) {
    return this.classRepo.update(id, dto);
  }

  delete(id: number) {
    return this.classRepo.delete(id);
  }
}
