import * as common from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../domain/entities/User';

@common.Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async findByUserName(fullName: string): Promise<User | null> {
    return this.userRepo.findOneBy({ fullName });
  }

  async findByCpf(cpf: string): Promise<User | null> {
    return this.userRepo.findOneBy({ cpf });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepo.findOneBy({ email });
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }
}
