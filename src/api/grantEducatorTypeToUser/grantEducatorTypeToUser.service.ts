import * as common from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersUsertype } from '../../domain/entities/UsersUserType';
import { GrantEducatorTypeToUserDto } from './models/grantEducatorTypeToUserDto';

export type UserToGrant = GrantEducatorTypeToUserDto & {
  user_type_id?: number;
  company_id?: number;
};

@common.Injectable()
export class GrantEducatorTypeToUserService {
  constructor(
    @InjectRepository(UsersUsertype)
    private grantEducatorTypeToUserRepo: Repository<UsersUsertype>,
  ) {}

  async insertGrantEducatorTypeToUser(
    grantEducatorTypeToUserDto: GrantEducatorTypeToUserDto,
  ) {
    const userToGrant: UserToGrant = grantEducatorTypeToUserDto;

    userToGrant.user_type_id = 2;

    userToGrant.company_id = 1;

    const usersUsertype = this.grantEducatorTypeToUserRepo.create(userToGrant);
    return await this.grantEducatorTypeToUserRepo.save(usersUsertype);
  }
}
