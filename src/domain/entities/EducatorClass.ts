import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Class } from './Class';
import { User } from './User';

@Entity('EDUCATORS_CLASSES')
export class EducatorClass {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => User)
  @JoinColumn({ name: 'educator_id' })
  @ApiProperty()
  educator: User;

  @ManyToOne(() => Class)
  @JoinColumn({ name: 'class_id' })
  @ApiProperty()
  class: Class;
}
