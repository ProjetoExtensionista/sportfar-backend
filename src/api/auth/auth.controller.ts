import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Request } from 'express';
import { encrypt } from 'src/domain/encryption/encryption';
import { User } from 'src/domain/entities/User';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt.guard';
import { LocalAuthGuard } from './guards/local.guard';
import { LoginDto } from './models/LoginDto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: Request, @Body() body: LoginDto) {
    return this.authService.login(req.user as User);
  }

  @UseGuards(JwtAuthGuard)
  @Post('self')
  @ApiBearerAuth()
  @ApiOkResponse({ type: String })
  @ApiUnauthorizedResponse()
  self(@Req() req: Request) {
    return (req.user as User).email;
  }

  @Get('hash/:text')
  hash(@Param('text') text: string) {
    return encrypt(text);
  }
}
