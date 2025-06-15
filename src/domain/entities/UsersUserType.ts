import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';
import { UserType } from './UserType';

@Entity('USERS_USERTYPE')
export class UsersUsertype {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  user_id: number;

  @Column()
  @ApiProperty()
  user_type_id: number;

  @Column()
  @ApiProperty()
  company_id: number;

  @ManyToOne(() => User, (user) => user.userTypes)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => UserType, (userType) => userType.userTypes)
  @JoinColumn({ name: 'user_type_id' })
  userType: UserType;
}
