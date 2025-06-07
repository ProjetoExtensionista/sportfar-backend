import { ApiProperty } from '@nestjs/swagger';

export class UserClassDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  enrolled: boolean;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  class_id: number;
}
