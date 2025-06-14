import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsersUsertype } from './UsersUserType';

@Entity('USERTYPE')
export class UserType {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;

  @OneToMany(() => UsersUsertype, (uut) => uut.user_type_id)
  userTypes: UsersUsertype[];
}
