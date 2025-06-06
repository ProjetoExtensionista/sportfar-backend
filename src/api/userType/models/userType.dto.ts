import { ApiProperty } from '@nestjs/swagger';

export class UserTypeDto {
  @ApiProperty()
  type: string;
}
