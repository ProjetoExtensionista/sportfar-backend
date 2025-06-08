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
    private educatorClassesRepo: Repository<EducatorClass>,
  ) {}

  async insert(createEducatorClassDto: CreateEducatorClassDto) {
    const educatorClass = this.educatorClassesRepo.create({
      educator: { id: createEducatorClassDto.educator_id },
      class: { id: createEducatorClassDto.class_id },
    });
    return await this.educatorClassesRepo.save(educatorClass);
  }

  async findByEducId(educator_id: number): Promise<EducatorClass[] | null> {
    return this.educatorClassesRepo.find({
      where: { educator: { id: educator_id } },
    });
  }

  async findByClassId(class_id: number): Promise<EducatorClass[] | null> {
    return this.educatorClassesRepo.find({
      where: { class: { id: class_id } },
    });
  }

  async update(
    id: number,
    updateEducatorClassDto: Partial<UpdateEducatorClassDto>,
  ) {
    return await this.educatorClassesRepo.update(id, {
      educator: { id: updateEducatorClassDto.educator_id },
      class: { id: updateEducatorClassDto.class_id },
    });
  }

  async delete(id: number) {
    const result = await this.educatorClassesRepo.delete(id);

    if (result.affected === 0) {
      throw new common.NotFoundException(
        `Relação Educator Class com o id:${id} não encontrado`,
      );
    }
  }
}
