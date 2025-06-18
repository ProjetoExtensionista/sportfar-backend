import * as common from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserUserType } from 'src/domain/entities/UserUserType';
import { Repository } from 'typeorm';
import { User } from '../../domain/entities/User';
import { UserRequestDto } from './models/userRequestDto';

@common.Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    @InjectRepository(UserUserType)
    private userUserTypeRepo: Repository<UserUserType>,
  ) {}

  async findByUserName(fullName: string): Promise<User | null> {
    return await this.userRepo.findOneBy({ fullName });
  }

  async findByCpf(cpf: string): Promise<User | null> {
    return await this.userRepo.findOneBy({ cpf });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepo.findOneBy({ email });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async findByUsertype(usertype_id: number): Promise<User[] | null> {
    return await this.userUserTypeRepo
      .find({ where: { userType: { id: usertype_id } } })
      .then((usersUserType) => usersUserType.map((uut) => uut.user));
  }

  async insert(user: UserRequestDto): Promise<UserRequestDto> {
    const userType = this.userRepo.create(user);

    return await this.userRepo.save(userType);
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
