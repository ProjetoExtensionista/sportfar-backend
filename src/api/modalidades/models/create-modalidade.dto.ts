import { ApiProperty } from '@nestjs/swagger';

export class CreateModalidadeDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  company_id: number;
}
