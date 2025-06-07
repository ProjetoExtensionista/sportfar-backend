import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CLASSROOM')
export class ClassRoom {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ name: 'class_date', type: 'date' })
  @ApiProperty()
  classDate: Date;

  @Column({ name: 'class_id', type: 'int' })
  @ApiProperty()
  classId: number;
}
