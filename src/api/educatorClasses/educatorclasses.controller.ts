import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { EducatorClassesService } from './educatorclasses.service';
import { EducatorClassesDto } from './models/educatorclasses.dto';

@Controller('educatorClasses')
export class EducatorClassesController {
  constructor(private educatorClassesService: EducatorClassesService) {}

  @Post()
  async create(@Body() educatorClassesDto: EducatorClassesDto) {
    return await this.educatorClassesService.insertEducatorClasses(educatorClassesDto);
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  async get(@Param('id') id: number) {
    return this.educatorClassesService.findEducClassesByEducId(id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: EducatorClassesDto })
  async update(
    @Param('id') id: number,
    @Body() educatorClassesDto: Partial<EducatorClassesDto>,
  ) {
    return this.educatorClassesService.updateEducatorClasses(
      id,
      educatorClassesDto,
    );
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number })
  async delete(@Param('id') id: number) {
    return this.educatorClassesService.deleteEducatorClasses(id);
  }
}
