import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ABSENCE')
export class Absence {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  classroom_id: number;
  @Column()
  user_id: number;
  @Column()
  type_id: number;
}
