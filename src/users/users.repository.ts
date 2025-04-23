import { Injectable } from '@nestjs/common';
import { UserEntity } from './Entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findByUserName(username: string): Promise<UserEntity | null> {
    return this.findOneBy({ username });
  }
}
