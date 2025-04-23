import * as common from '@nestjs/common';
import { UserRepository } from './users.repository';
import { UserEntity } from './Entities/User';

@common.Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async findOne(username: string): Promise<UserEntity | null> {
    return await this.userRepository.findByUserName(username);
  }
}
