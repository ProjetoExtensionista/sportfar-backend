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
    return await this.classRoomRepo.findOneBy({ id });
  }

  async findAll(): Promise<ClassRoom[] | null> {
    return await this.classRoomRepo.find();
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
      .createQueryBuilder('CLASSROOM')
      .select([
        'CLASSROOM.id AS cl_id',
        'CLASSES.name AS cls_name',
        'USERS.full_name AS usr_name',
        'USERS.birth_date AS "data nascimento"',
        'ABSENCE_TYPE.type AS abs_type',
        'ABSENCE.id AS abs_id',
      ])
      .innerJoin('CLASSES', 'CLASSES', 'CLASSROOM.class_id = CLASSES.id')
      .innerJoin('USER_CLASS', 'USER_CLASS', 'USER_CLASS.class_id = CLASSES.id')
      .innerJoin('USERS', 'USERS', 'USERS.id = USER_CLASS.user_id')
      .leftJoin(
        'ABSENCE',
        'ABSENCE',
        'USERS.id = ABSENCE.user_id AND CLASSROOM.id = ABSENCE.classroom_id',
      )
      .leftJoin(
        'ABSENCE_TYPE',
        'ABSENCE_TYPE',
        'ABSENCE.type_id = ABSENCE_TYPE.id',
      )
      .where('CLASSROOM.id = :id', { id })
      .getRawMany();
    return result;
  }
}
