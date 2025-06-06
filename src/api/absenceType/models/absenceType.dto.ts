import { ApiProperty } from '@nestjs/swagger';

export class AbsenceTypeDto {
  @ApiProperty()
  type: string;
}
