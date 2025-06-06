import { ApiProperty } from '@nestjs/swagger';

export class AbsenceDto {
  @ApiProperty()
  classroom_id: number;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  type_id: number;
}
