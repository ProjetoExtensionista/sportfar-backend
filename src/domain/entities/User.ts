import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USERS')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'full_name' })
  fullName: string;
  @Column()
  cpf: string;
  @Column({ name: 'birth_date' })
  birthDate: Date;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ name: 'password_temp' })
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
