import * as common from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Absence } from './Entities/Absence';
import { AbsenceDto } from './absence.dto';

@common.Injectable()
export class AbsenceService {
  constructor(
    @InjectRepository(Absence)
    private absenceRepo: Repository<Absence>,
  ) {}

  // SELECT
  async findAbsencesByUserId(user_id: number): Promise<Absence[] | null> {
    return this.absenceRepo.find({ where: { user_id } });
  }

  // INSERT
  async insertAbsence(absenceDto: AbsenceDto) {
    const absence = this.absenceRepo.create(absenceDto);
    return await this.absenceRepo.save(absence);
  }

  // UPDATE
  async updateAbsence(id: number, absenceDto: Partial<AbsenceDto>) {
    return await this.absenceRepo.update(id, absenceDto);
  }

  // DELETE
  async deleteAbsence(id: number) {
    const result = await this.absenceRepo.delete(id);

    if (result.affected === 0) {
      throw new common.NotFoundException(`Absence com o ${id} não encontrado`);
    }
  }
}
