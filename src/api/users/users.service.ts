import * as common from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../domain/entities/User';
import { UserClass } from 'src/domain/entities/UserClass';

@common.Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    @InjectRepository(UserClass)
    private userClassRepo: Repository<UserClass>,
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

  async findByClass(classId: number): Promise<User[]> {
    const users = await this.userRepo
      .createQueryBuilder('u')
      .innerJoin('u.userClasses', 'uc')
      .where('uc.classId = :classId', { classId: classId })
      .getMany();

    return users;
  }
}
