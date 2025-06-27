import { ApiProperty } from '@nestjs/swagger';

export class UserWithTypeDto {
  @ApiProperty()
  fullName: string;

  @ApiProperty()
  type: string;
}
