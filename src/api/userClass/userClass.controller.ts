import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiParam,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserClass } from 'src/domain/entities/UserClass';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UserClassService } from './userClass.service';
import { User } from 'src/domain/entities/User';

@Controller('userClass/type')
@ApiUnauthorizedResponse()
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UserClassController {
  constructor(private UserClassService: UserClassService) {}

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: UserClass })
  async getOne(@Param('id') id: number) {
    return this.UserClassService.findById(id);
  }
}
