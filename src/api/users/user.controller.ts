import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { User } from '../../domain/entities/User';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UserRequestDto } from './models/userRequestDto';
import { UserResponseDto } from './models/userResponseDto';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @Get()
  @ApiOkResponse({ type: UserResponseDto, isArray: true })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':cpf')
  @ApiOkResponse({ type: UserResponseDto })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async find(@Param('cpf') cpf: string) {
    return await this.userService.findByCpf(cpf);
  }

  @Get('findByClass/:classId')
  @ApiOkResponse({ type: User })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findByClass(@Param('classId') classId: number) {
    return await this.userService.findByClass(classId);
  }

  @Get('usertype/:usertype_id')
  @ApiOkResponse({ type: UserResponseDto })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findByUsertype(@Param('usertype_id') usertype_id: number) {
    return await this.userService.findByUsertype(usertype_id);
  }

  @Post()
  @ApiOkResponse({ type: UserRequestDto })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async post(@Body() user: UserRequestDto) {
    return await this.userService.insert(user);
  }
}
