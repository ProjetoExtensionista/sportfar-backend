import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiQuery,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserType } from 'src/domain/entities/UserType';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { ReportsService } from './reports.service';

@Controller('reports')
@ApiUnauthorizedResponse()
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ReportController {
  constructor(private service: ReportsService) {}

  @Get('UsersWithType')
  @ApiOkResponse({ type: [UserType] })
  @ApiQuery({ name: 'name', required: false, type: String })
  @ApiQuery({ name: 'userTypeId', required: false, type: String })
  async getUsersWithType(
    @Query('name') fullName?: string,
    @Query('userTypeId') userTypeId?: string,
  ) {
    return await this.service.getUsersWithType(fullName, userTypeId);
  }
}
