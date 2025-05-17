import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/api/users/users.service';
import { compareText } from 'src/domain/encryption/encryption';
import { User } from 'src/domain/entities/User';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByEmail(email);

    if (user && (await compareText(password, user.password))) {
      return user;
    }
    return null;
  }

  login(user: User): { accessToken: string } {
    const payload = { username: user.email, sub: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
