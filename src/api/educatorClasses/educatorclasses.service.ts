import * as common from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EducatorClasses } from '../../domain/entities/EducatorClasses';
import { EducatorClassesDto } from './models/educatorclasses.dto';

@common.Injectable()
export class EducatorClassesService {
  constructor(
    @InjectRepository(EducatorClasses)
    private educatorClassesRepo: Repository<EducatorClasses>,
  ) {}

  // SELECT
  async findEducClassesByEducId(
    educator_id: number,
  ): Promise<EducatorClasses[] | null> {
    return this.educatorClassesRepo.find({ where: { educator_id } });
  }

  // INSERT
  async insertEducatorClasses(educatorClassesDto: EducatorClassesDto) {
    const educatorClass = this.educatorClassesRepo.create(educatorClassesDto);
    return await this.educatorClassesRepo.save(educatorClass);
  }

  // UPDATE
  async updateEducatorClasses(
    id: number,
    educatorClassesDto: Partial<EducatorClassesDto>,
  ) {
    return await this.educatorClassesRepo.update(id, educatorClassesDto);
  }

  // DELETE
  async deleteEducatorClasses(id: number) {
    const result = await this.educatorClassesRepo.delete(id);

    if (result.affected === 0) {
      throw new common.NotFoundException(
        `Relação Educator Class com o ${id} não encontrado`,
      );
    }
  }
}
