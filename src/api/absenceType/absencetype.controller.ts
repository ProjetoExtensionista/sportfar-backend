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
import { AbsenceTypeService } from './absencetype.service';
import { AbsenceTypeDto } from './models/absencetype.dto';

@Controller('absence/type')
export class AbsenceTypeController {
  constructor(private absenceTypeService: AbsenceTypeService) {}

  @Post()
  async create(@Body() absenceTypeDto: AbsenceTypeDto) {
    await this.absenceTypeService.insertAbsenceType(absenceTypeDto);
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  async get(@Param('id') id: number) {
    return this.absenceTypeService.findAbsenceTypeById(id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: AbsenceTypeDto })
  async update(
    @Param('id') id: number,
    @Body() absenceTypeDto: Partial<AbsenceTypeDto>,
  ) {
    return this.absenceTypeService.updateAbsenceType(id, absenceTypeDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number })
  async delete(@Param('id') id: number) {
    return this.absenceTypeService.deleteAbsenceType(id);
  }
}
