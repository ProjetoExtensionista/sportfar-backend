import * as common from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbsenceType } from './Entities/AbsenceType';
import { AbsenceTypeDto } from './absencetype.dto';

@common.Injectable()
export class AbsenceTypeService {
  constructor(
    @InjectRepository(AbsenceType)
    private absenceTypeRepo: Repository<AbsenceType>,
  ) {}

  async findAbsenceTypeById(id: number): Promise<AbsenceType | null> {
    return this.absenceTypeRepo.findOneBy({ id });
  }

  async insertAbsenceType(absenceTypeDto: AbsenceTypeDto) {
    const absenceType = this.absenceTypeRepo.create(absenceTypeDto);
    return await this.absenceTypeRepo.save(absenceType);
  }

  async updateAbsenceType(id: number, absenceTypeDto: Partial<AbsenceTypeDto>) {
    return await this.absenceTypeRepo.update(id, absenceTypeDto);
  }

  async deleteAbsenceType(id: number) {
    const result = await this.absenceTypeRepo.delete(id);

    if (result.affected === 0) {
      throw new common.NotFoundException(
        `Absence Type com id ${id} não encontrado`,
      );
    }
  }
}
