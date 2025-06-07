import * as common from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserClass } from 'src/domain/entities/UserClass';
import { Repository } from 'typeorm';
import { UserClassDto } from './models/userClass.dto';
import { User } from 'src/domain/entities/User';

@common.Injectable()
export class UserClassService {
  constructor(
    @InjectRepository(UserClass)
    private UserClassRepo: Repository<UserClass>,
  ) {}

  async findById(id: number): Promise<UserClass | null> {
    return this.UserClassRepo.findOneBy({ id });
  }
}
