import * as common from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EducatorClass } from '../../domain/entities/EducatorClass';
import { CreateEducatorClassDto } from './models/createEducatorClass.dto';
import { UpdateEducatorClassDto } from './models/updateEducatorClass.dto';

@common.Injectable()
export class EducatorClassService {
  constructor(
    @InjectRepository(EducatorClass)
    private educatorClassRepo: Repository<EducatorClass>,
  ) {}

  async insert(createEducatorClassDto: CreateEducatorClassDto) {
    const educatorClass = this.educatorClassRepo.create({
      educator: { id: createEducatorClassDto.educator_id },
      class: { id: createEducatorClassDto.class_id },
    });
    return await this.educatorClassRepo.save(educatorClass);
  }

  async findByEducId(educator_id: number): Promise<EducatorClass[] | null> {
    return await this.educatorClassRepo.find({
      where: { educator: { id: educator_id } },
    });
  }

  async findByClassId(class_id: number): Promise<EducatorClass[] | null> {
    return await this.educatorClassRepo.find({
      where: { class: { id: class_id } },
    });
  }

  async update(
    id: number,
    updateEducatorClassDto: Partial<UpdateEducatorClassDto>,
  ) {
    return await this.educatorClassRepo.update(id, {
      educator: { id: updateEducatorClassDto.educator_id },
      class: { id: updateEducatorClassDto.class_id },
    });
  }

  async delete(id: number) {
    try {
      return await this.educatorClassRepo.delete(id);
    } catch {
      return {
        error: common.HttpStatus.CONFLICT,
        message: 'Não foi possível apagar o registro.',
      };
    }
  }
}
