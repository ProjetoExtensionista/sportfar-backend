import { ApiProperty } from '@nestjs/swagger';

export class CreateEducatorClassDto {
  @ApiProperty()
  educator_id: number;

  @ApiProperty()
  class_id: number;
}
