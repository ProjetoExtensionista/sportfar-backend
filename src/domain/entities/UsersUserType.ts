import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
