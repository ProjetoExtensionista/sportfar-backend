import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from './Company';

@Entity('COURSES')
export class Course {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  id: number;

  @Column({ length: 100 })
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  company_id: number;

  @ManyToOne(() => Company, { eager: true })
  @JoinColumn({ name: 'company_id' })
  @ApiProperty()
  company: Company;
}
