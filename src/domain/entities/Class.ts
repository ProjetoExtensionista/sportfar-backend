import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Course } from './Course';

@Entity('CLASSES')
export class Class {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  id: number;

  @Column({ name: 'name' })
  @ApiProperty()
  name: string;

  @Column({ name: 'capacity' })
  @ApiProperty()
  capacity: number;

  @Column({ name: 'year_from' })
  @ApiProperty()
  year_from: number;

  @Column({ name: 'year_to' })
  @ApiProperty()
  year_to: number;

  @Column({ name: 'hour_start' })
  @ApiProperty()
  hour_start: Date;

  @Column({ name: 'hour_end' })
  @ApiProperty()
  hour_end: Date;

  @Column({ name: 'status' })
  @ApiProperty()
  status: boolean;

  @Column({ name: 'date_start' })
  @ApiProperty()
  date_start: Date;

  @Column({ name: 'date_end' })
  @ApiProperty()
  date_end: Date;

  @Column({ name: 'date_start_enroll' })
  @ApiProperty()
  date_start_enroll: Date;

  @Column({ name: 'date_end_enroll' })
  @ApiProperty()
  date_end_enroll: Date;

  @Column({ name: 'week_day_id' })
  @ApiProperty()
  week_day_id: number;

  @Column({ name: 'gender' })
  @ApiProperty()
  gender: number;

  @ManyToOne(() => Course, { eager: true })
  @JoinColumn({ name: 'course_id' })
  @ApiProperty()
  course: Course;
}
