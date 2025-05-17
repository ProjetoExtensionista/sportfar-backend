import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { User } from '../../domain/entities/User';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UserResponseDto } from './models/UserResponseDto';
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
}
