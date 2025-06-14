import { Body, Controller, Post, Delete, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { GrantEducatorTypeToUserService } from './grantEducatorTypeToUser.service';
import { GrantEducatorTypeToUserDto } from './models/grantEducatorTypeToUserDto';

@Controller('grantEducatorTypeToUser')
export class GrantEducatorTypeToUserController {
  constructor(
    private grantEducatorTypeToUserService: GrantEducatorTypeToUserService,
  ) {}

  @Post()
  async create(@Body() grantEducatorTypeToUserDto: GrantEducatorTypeToUserDto) {
    return await this.grantEducatorTypeToUserService.insertGrantEducatorTypeToUser(
      grantEducatorTypeToUserDto,
    );
  }

  @Delete(':user_id')
  @ApiParam({ name: 'user_id', type: Number })
  async delete(@Param('user_id') user_id: number) {
    return this.grantEducatorTypeToUserService.deleteEducatorTypeFromUser( user_id );
  }
}
