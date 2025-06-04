import { ApiProperty } from '@nestjs/swagger';

export class AbsenceTypeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  type: string;
}
