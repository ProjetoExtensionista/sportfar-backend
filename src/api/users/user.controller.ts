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
    return this.userService.findAll();
  }

  @Get(':cpf')
  @ApiOkResponse({ type: UserResponseDto })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async find(@Param('cpf') cpf: string) {
    return this.userService.findByCpf(cpf);
  }

  @Post()
  @ApiOkResponse({ type: UserRequestDto })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async post(@Body() user: UserRequestDto) {
    console.log(user);
    return await this.userService.insert(user);
  }
}
