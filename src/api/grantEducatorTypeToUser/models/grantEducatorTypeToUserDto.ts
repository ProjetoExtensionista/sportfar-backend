import { ApiProperty } from '@nestjs/swagger';

export class GrantEducatorTypeToUserDto {
  @ApiProperty()
  user_id: number;
}
