import { ApiProperty } from '@nestjs/swagger';

export class CreateClassDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  capacity: number;

  @ApiProperty()
  year_from: number;

  @ApiProperty()
  year_to: number;

  @ApiProperty()
  hour_start: Date;

  @ApiProperty()
  hour_end: Date;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  date_start: Date;

  @ApiProperty()
  date_end: Date;

  @ApiProperty()
  date_start_enroll: Date;

  @ApiProperty()
  date_end_enroll: Date;

  @ApiProperty()
  week_day_id: number;

  @ApiProperty()
  gender: number;

  @ApiProperty()
  course_id: number;

  @ApiProperty()
  educators: number[];
}
