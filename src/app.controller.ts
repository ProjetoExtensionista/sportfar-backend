import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Param,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserRequest } from './Models/UserRequest';
import { AbsenceDto } from './absence/absence.dto';
import { AbsenceTypeDto } from './absence/absencetype.dto';
import { AbsenceService } from './absence/absence.service';
import { AbsenceTypeService } from './absence/absencetype.service';
import { ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('Login')
export class AppController {
  constructor(private absenceService: AbsenceService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  login(@Body() @Request() req: UserRequest) {
    return req.username;
  }

  @Post('auth/logout')
  logout(@Request() req) {
    return req.logout();
  }
}

@Controller('Absence')
export class AbsenceController {
  constructor(private absenceService: AbsenceService) {}

  @Post('absence/insert')
  async create(@Body() absenceDto: AbsenceDto) {
    await this.absenceService.insertAbsence(absenceDto);
  }

  @Get('absence/findByUserId/:id')
  @ApiParam({ name: 'id', type: Number })
  async get(@Param('id') id: number) {
    return this.absenceService.findAbsencesByUserId(id);
  }

  @Patch('absence/update/:id')
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: AbsenceDto })
  async update(
    @Param('id') id: number,
    @Body() absenceDto: Partial<AbsenceDto>,
  ) {
    return this.absenceService.updateAbsence(id, absenceDto);
  }

  @Delete('absence/delete/:id')
  @ApiParam({ name: 'id', type: Number })
  async delete(@Param('id') id: number) {
    return this.absenceService.deleteAbsence(id);
  }
}

@Controller('AbsenceType')
export class AbsenceTypeController {
  constructor(private absenceTypeService: AbsenceTypeService) {}

  @Post('absenceType/insert')
  async create(@Body() absenceTypeDto: AbsenceTypeDto) {
    await this.absenceTypeService.insertAbsenceType(absenceTypeDto);
  }

  @Get('absenceType/findById/:id')
  @ApiParam({ name: 'id', type: Number })
  async get(@Param('id') id: number) {
    return this.absenceTypeService.findAbsenceTypeById(id);
  }

  @Patch('absenceType/update/:id')
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: AbsenceTypeDto })
  async update(
    @Param('id') id: number,
    @Body() absenceTypeDto: Partial<AbsenceTypeDto>,
  ) {
    return this.absenceTypeService.updateAbsenceType(id, absenceTypeDto);
  }

  @Delete('absenceType/delete/:id')
  @ApiParam({ name: 'id', type: Number })
  async delete(@Param('id') id: number) {
    return this.absenceTypeService.deleteAbsenceType(id);
  }
}
