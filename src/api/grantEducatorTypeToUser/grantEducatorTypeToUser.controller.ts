import { Body, Controller, Post } from '@nestjs/common';
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
}
