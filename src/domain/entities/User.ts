import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USERS')
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ name: 'full_name' })
  @ApiProperty()
  fullName: string;

  @Column()
  @ApiProperty()
  cpf: string;

  @Column({ name: 'birth_date' })
  @ApiProperty()
  birthDate: Date;

  @Column()
  @ApiProperty()
  email: string;

  @Column()
  @ApiProperty()
  password: string;

  @Column({ name: 'password_temp' })
  @ApiProperty()
  passwordTemp: boolean;

  @Column()
  @ApiProperty()
  address: string;

  @Column()
  @ApiProperty()
  city: string;

  @Column()
  @ApiProperty()
  cep: string;

  @Column()
  @ApiProperty()
  phone: string;
}
