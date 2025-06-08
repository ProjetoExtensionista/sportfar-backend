import { ApiProperty } from '@nestjs/swagger';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from './Company';
import { User } from './User';
import { UserType } from './UserType';

@Entity('USERS_USERTYPE')
export class UserUserType {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  id: number;

  @ManyToOne(() => Company, { eager: true })
  @JoinColumn({ name: 'company_id' })
  @ApiProperty()
  company: Company;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  @ApiProperty()
  user: User;

  @ManyToOne(() => UserType, { eager: true })
  @JoinColumn({ name: 'usertype_id' })
  @ApiProperty()
  userType: UserType;
}
