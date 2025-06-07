import { ApiProperty } from '@nestjs/swagger';

export class ClassRoomDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  classDate: Date;

  @ApiProperty()
  classId: number;
}
