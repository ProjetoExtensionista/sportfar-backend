import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('COMPANY')
export class Company {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ name: 'name' })
  name: string;
  @Column({ name: 'url_substring' })
  url: string;
  @Column({ name: 'logo' })
  logo: Buffer;
}
