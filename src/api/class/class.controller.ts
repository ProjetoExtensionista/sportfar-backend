import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { Class } from '../../domain/entities/Class';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { ClassService } from './class.service';

@Controller('class')
export class ClassController {
  constructor(private ClassService: ClassService) {}

  @Get(':id')
  @ApiOkResponse({ type: Class })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async find(@Param('id') id: number) {
    return this.ClassService.findById(id);
  }
}
