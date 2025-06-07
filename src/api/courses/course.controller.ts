import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Course } from 'src/domain/entities/Course';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CourseService } from './course.service';
import { CreateCourseDto } from './models/createCourse.dto';
import { UpdateCourseDto } from './models/updateCourse.dto';

@Controller('courses')
@ApiUnauthorizedResponse()
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class CourseController {
  constructor(private readonly service: CourseService) {}

  @Post()
  @ApiOkResponse({ type: Course })
  create(@Body() dto: CreateCourseDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOkResponse({ type: Course, isArray: true })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Course })
  @ApiNotFoundResponse()
  async findOne(@Param('id') id: string) {
    const course = await this.service.findOne(+id);

    if (course == null) {
      throw new NotFoundException();
    }

    return course;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
