import * as common from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserType } from './Entities/UserType';
import { UserTypeDto } from './userType.dto';

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
    return await this.userTypeRepo.update(id, userTypeDto);
  }

  async deleteUserType(id: number) {
    const result = await this.userTypeRepo.delete(id);

    if (result.affected === 0) {
      throw new common.NotFoundException(`UserType com o ${id} não encontrado`);
    }
  }
}
