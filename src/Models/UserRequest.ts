import { ApiProperty } from '@nestjs/swagger';

export class UserRequest {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
