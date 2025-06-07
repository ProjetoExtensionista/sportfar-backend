import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';
import { ClassRoom } from '../../domain/entities/ClassRoom';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { ClassRoomService } from './classRoom.service';
import { ClassRoomDto } from './models/classRoom.dto';

@Controller('classRoom')
export class ClassRoomController {
  constructor(private ClassRoomService: ClassRoomService) {}

  @Get(':id')
  @ApiOkResponse({ type: ClassRoom })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async find(@Param('id') id: number) {
    return this.ClassRoomService.findById(id);
  }

  @Get('getStudentsAbsenceByClassId/:id')
  @ApiOkResponse({ type: ClassRoom })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findByClassId(@Param('id') id: number) {
    return this.ClassRoomService.findByClassId(id);
  }

  @Post()
  async create(@Body() ClassRoomDto: ClassRoomDto) {
    await this.ClassRoomService.insertClassRoom(ClassRoomDto);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: ClassRoomDto })
  async update(
    @Param('id') id: number,
    @Body() ClassRoomDto: Partial<ClassRoomDto>,
  ) {
    return this.ClassRoomService.updateClassRoom(id, ClassRoomDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number })
  async delete(@Param('id') id: number) {
    return this.ClassRoomService.deleteClassRoom(id);
  }
}
