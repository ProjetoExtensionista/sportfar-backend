import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserRequest } from './Models/UserRequest';

@Controller('Login')
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  login(@Body() @Request() req: UserRequest) {
    return req.username;
  }

  @Post('auth/logout')
  logout(@Request() req) {
    return req.logout();
  }

  @Get('moises')
  jorge() {
    return 'ola mundo';
  }
}
