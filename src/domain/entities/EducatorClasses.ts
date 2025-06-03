import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('EDUCATOR_CLASSES')
export class EducatorClasses {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  educator_id: number;

  @ApiProperty()
  @Column()
  class_id: number;
}
