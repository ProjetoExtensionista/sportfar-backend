import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity('CLASSES')
export class Class {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  capacity: number;

  @Column({ name: 'year_from' })
  @ApiProperty()
  yearFrom: number;

  @Column({ name: 'year_to' })
  @ApiProperty()
  yearTo: number;

  @Column({ name: 'hour_start' })
  @ApiProperty()
  hourStart: string;

  @Column({ name: 'hour_end' })
  @ApiProperty()
  hourEnd: string;

  @Column()
  @ApiProperty()
  status: string;

  @Column({ name: 'date_start' })
  @ApiProperty()
  dateStart: Date;

  @Column({ name: 'date_end' })
  @ApiProperty()
  dateEnd: Date;

  @Column({ name: 'date_start_enroll' })
  @ApiProperty()
  dateStartEnroll: Date;

  @Column({ name: 'date_end_enroll' })
  @ApiProperty()
  dateEndEnroll: Date;

  @Column({ name: 'week_day_id' })
  @ApiProperty()
  weekDayId: number;

  @Column()
  @ApiProperty()
  gender: string;

  @Column({ name: 'course_id' })
  @ApiProperty()
  courseId: number;

  @ManyToMany(() => User, (user) => user.classe)
  user: User[];
}
