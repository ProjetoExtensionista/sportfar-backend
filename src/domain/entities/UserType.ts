import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USERTYPE')
export class UserType {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;
}
