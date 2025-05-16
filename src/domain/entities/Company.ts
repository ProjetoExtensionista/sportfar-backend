import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('COMPANY')
export class Company {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  id: number;

  @Column({ name: 'name' })
  @ApiProperty()
  name: string;

  @Column({ name: 'url_substring' })
  @ApiProperty()
  url: string;

  @Column({ name: 'logo' })
  @ApiProperty()
  logo: Buffer;
}
