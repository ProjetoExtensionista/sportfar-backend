import * as common from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from 'src/domain/entities/UserType';
import { Repository } from 'typeorm';
import { UserTypeDto } from './models/userType.dto';

@common.Injectable()
export class UserTypeService {
  constructor(
    @InjectRepository(UserType)
    private userTypeRepo: Repository<UserType>,
  ) {}

  async findById(id: number): Promise<UserType | null> {
    return this.userTypeRepo.findOneBy({ id });
  }

  async insertUserType(userTypeDto: UserTypeDto) {
    const userType = this.userTypeRepo.create(userTypeDto);
    return await this.userTypeRepo.save(userType);
  }

  async updateUserType(id: number, userTypeDto: Partial<UserTypeDto>) {
    const result = await this.userTypeRepo.update(id, userTypeDto);

    if (result.affected === 0) {
      throw new NotFoundException(`UserType com o ${id} não encontrado`);
    }

    return result;
  }

  async deleteUserType(id: number) {
    const result = await this.userTypeRepo.delete(id);

    return (result.affected ?? 0) > 0;
  }
}
