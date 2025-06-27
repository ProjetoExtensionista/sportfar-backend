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
import { EducatorClassService } from './educatorClass.service';
import { CreateEducatorClassDto } from './models/createEducatorClass.dto';

@Controller('educator_classes')
export class EducatorClassController {
  constructor(private educatorClassService: EducatorClassService) {}

  @Post()
  async create(@Body() dto: CreateEducatorClassDto) {
    return await this.educatorClassService.insert(dto);
  }

  @Get(':educ_id')
  @ApiParam({ name: 'id', type: Number })
  async getByEduc(@Param('id') id: number) {
    return this.educatorClassService.findByEducId(id);
  }

  @Get(':class_id')
  @ApiParam({ name: 'id', type: Number })
  async getByClass(@Param('id') id: number) {
    return this.educatorClassService.findByClassId(id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: CreateEducatorClassDto })
  async update(
    @Param('id') id: number,
    @Body() dto: Partial<CreateEducatorClassDto>,
  ) {
    return this.educatorClassService.update(id, dto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number })
  async delete(@Param('id') id: number) {
    return this.educatorClassService.delete(id);
  }
}
