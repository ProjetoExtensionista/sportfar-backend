import { ApiProperty } from '@nestjs/swagger';

export class EducatorClassesDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  educator_id: number;

  @ApiProperty()
  class_id: number;
}
