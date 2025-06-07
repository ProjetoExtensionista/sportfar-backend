import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Class } from './Class';
import { User } from './User';

@Entity('USER_CLASS')
export class UserClass {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  enrolled: boolean;
  @Column({ name: 'user_id' })
  userId: number;
  @Column({ name: 'class_id' })
  classId: number;
  @ManyToOne(() => User, (user) => user.classe)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
  @ManyToOne(() => Class, (classe) => classe.user)
  @JoinColumn({ name: 'class_id', referencedColumnName: 'id' })
  classe: Class;
}
