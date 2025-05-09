import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ABSENCE_TYPE')
export class AbsenceType {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;
}
