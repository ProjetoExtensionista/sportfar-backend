import { ApiProperty } from '@nestjs/swagger';

export class EducatorClassesDto {
  @ApiProperty()
  educator_id: number;

  @ApiProperty()
  class_id: number;
}
