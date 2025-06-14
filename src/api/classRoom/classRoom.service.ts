import * as common from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassRoom } from '../../domain/entities/ClassRoom';
import { ClassRoomDto } from './models/classRoom.dto';

@common.Injectable()
export class ClassRoomService {
  constructor(
    @InjectRepository(ClassRoom)
    private classRoomRepo: Repository<ClassRoom>,
  ) {}

  async findById(id: number): Promise<ClassRoom | null> {
    return this.classRoomRepo.findOneBy({ id });
  }

  async findAll(): Promise<ClassRoom[] | null> {
    return this.classRoomRepo.find();
  }

  async insertClassRoom(classRoomDto: ClassRoomDto) {
    const data = classRoomDto.classDate;
    const formattedDate = new Date(data.toString().split('T')[0]);
    classRoomDto.classDate = formattedDate;
    const classRoom = this.classRoomRepo.create(classRoomDto);
    return await this.classRoomRepo.save(classRoom);
  }

  async updateClassRoom(id: number, classRoomDto: Partial<ClassRoomDto>) {
    if (classRoomDto.classDate != null) {
      const data = classRoomDto.classDate;
      const formattedDate = new Date(data.toString().split('T')[0]);
      classRoomDto.classDate = formattedDate;
    }
    return await this.classRoomRepo.update(id, classRoomDto);
  }

  async deleteClassRoom(id: number) {
    const result = await this.classRoomRepo.delete(id);

    if (result.affected === 0) {
      throw new common.NotFoundException(
        `Absence Type com id ${id} não encontrado`,
      );
    }
  }

  async findByClassRoomId(id: number): Promise<unknown[] | null> {
    const result = await this.classRoomRepo
      .createQueryBuilder('cr')
      .select([
        'c.id AS classroom_id',
        'c.name AS class_name',
        'u.id AS user_id',
        'u.full_name',
        'at.type AS absence_type',
        'cr.class_date',
        'wd.name AS weekday_name',
      ])
      .innerJoin('ABSENCE', 'a', 'a.classroom_id = cr.id')
      .innerJoin('USERS', 'u', 'u.id = a.user_id')
      .innerJoin('ABSENCE_TYPE', 'at', 'at.id = a.type_id')
      .innerJoin('CLASSES', 'c', 'c.id = cr.class_id')
      .innerJoin('WEEKDAYS', 'wd', 'wd.id = c.week_day_id')
      .where('cr.id = :id', { id })
      .getRawMany();
    return result;
  }
}
