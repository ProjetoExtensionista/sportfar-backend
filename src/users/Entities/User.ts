import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USERS')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fullName: string;
  @Column()
  cpf: string;
  @Column()
  birthDate: Date;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  passwordTemp: boolean;
  @Column()
  address: string;
  @Column()
  city: string;
  @Column()
  cep: string;
  @Column()
  phone: string;
}
