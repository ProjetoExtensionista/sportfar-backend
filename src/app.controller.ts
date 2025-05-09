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
import { UserTypeDto } from './userType/userType.dto';
import { UserTypeService } from './userType/userType.service';
import { ApiBody, ApiParam } from '@nestjs/swagger';
@Controller('Login')
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  login(@Body() @Request() req: UserRequest) {
    return req.username;
  }
}

@Controller('UserType')
export class UserTypeController {
  constructor(private userTypeService: UserTypeService) {}

  @Post('userType/insert')
  async create(@Body() userTypeDto: UserTypeDto) {
    await this.userTypeService.insertUserType(userTypeDto);
  }

  @Get('userType/selectById/:id')
  @ApiParam({ name: 'id', type: Number })
  async getOne(@Param('id') id: number) {
    return this.userTypeService.findById(id);
  }

  @Patch('userType/update/:id')
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UserTypeDto })
  async update(
    @Param('id') id: number,
    @Body() userTypeDto: Partial<UserTypeDto>,
  ) {
    return this.userTypeService.updateUserType(id, userTypeDto);
  }

  @Delete('userType/delete/:id')
  @ApiParam({ name: 'id', type: Number })
  async delete(@Param('id') id: number) {
    return this.userTypeService.deleteUserType(id);
  }
}
