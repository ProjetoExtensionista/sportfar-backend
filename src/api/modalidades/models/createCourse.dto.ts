import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  company_id: number;
}
