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
import { UserType } from 'src/domain/entities/UserType';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UserTypeDto } from './models/userType.dto';
import { UserTypeService } from './userType.service';

@Controller('usertype')
@ApiUnauthorizedResponse()
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UserTypeController {
  constructor(private userTypeService: UserTypeService) {}

  @Post()
  @ApiOkResponse({ type: UserType })
  async create(@Body() userTypeDto: UserTypeDto) {
    return await this.userTypeService.insertUserType(userTypeDto);
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: UserType })
  async getOne(@Param('id') id: number) {
    return await this.userTypeService.findById(id);
  }

  @Get()
  @ApiOkResponse({ type: UserTypeDto, isArray: true })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<UserType[] | null> {
    return await this.userTypeService.findAll();
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ type: UserType })
  async update(
    @Param('id') id: number,
    @Body() userTypeDto: Partial<UserTypeDto>,
  ) {
    return await this.userTypeService.updateUserType(id, userTypeDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiNoContentResponse()
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: number) {
    return await this.userTypeService.deleteUserType(id);
  }
}
