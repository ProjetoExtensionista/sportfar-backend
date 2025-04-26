import * as common from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './Entities/User';

@common.Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async findByUserName(fullName: string): Promise<User | null> {
    return this.userRepo.findOneBy({ fullName });
  }
}
