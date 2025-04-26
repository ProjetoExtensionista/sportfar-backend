import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserRequest } from './Models/UserRequest';

@Controller('Login')
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  login(@Body() @Request() req: UserRequest) {
    return req.username;
  }
}
