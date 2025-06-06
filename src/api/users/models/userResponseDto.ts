import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  cpf: string;
  @ApiProperty()
  birthDate: Date;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  passwordTemp: boolean;
  @ApiProperty()
  address: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  cep: string;
  @ApiProperty()
  phone: string;
}
