import { ApiProperty } from '@nestjs/swagger';

export class UserTypeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  type: string;
}
