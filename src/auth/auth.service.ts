import { Injectable } from '@nestjs/common';
import { User } from 'src/users/Entities/User';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByUserName(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}
