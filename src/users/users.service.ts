import * as common from '@nestjs/common';
import { UserRepository } from './users.repository';
import { UserEntity } from './Entities/User';

@common.Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async findOne(username: string): Promise<UserEntity | null> {
    console.log('Passei aqui pra ver o usuário');
    return await this.userRepository.findByUserName(username);
  }
}
