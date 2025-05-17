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
import { AbsenceService } from './absence.service';
import { AbsenceDto } from './models/absence.dto';

@Controller('absence')
export class AbsenceController {
  constructor(private absenceService: AbsenceService) {}

  @Post()
  async create(@Body() absenceDto: AbsenceDto) {
    await this.absenceService.insertAbsence(absenceDto);
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  async get(@Param('id') id: number) {
    return this.absenceService.findAbsencesByUserId(id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: AbsenceDto })
  async update(
    @Param('id') id: number,
    @Body() absenceDto: Partial<AbsenceDto>,
  ) {
    return this.absenceService.updateAbsence(id, absenceDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number })
  async delete(@Param('id') id: number) {
    return this.absenceService.deleteAbsence(id);
  }
}
