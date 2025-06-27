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
  private USER_TYPE_TO_BE_CHANGED = 2;

  constructor(
    @InjectRepository(UsersUsertype)
    private grantEducatorTypeToUserRepo: Repository<UsersUsertype>,
  ) {}

  async insertGrantEducatorTypeToUser(
    grantEducatorTypeToUserDto: GrantEducatorTypeToUserDto,
  ) {
    const userToGrant: UserToGrant = {
      ...grantEducatorTypeToUserDto,
      user_type_id: 2,
      company_id: 1,
    };

    const existing = await this.grantEducatorTypeToUserRepo.findOne({
      where: {
        user_id: userToGrant.user_id,
        user_type_id: 2,
      },
    });

    if (existing) {
      throw new common.ConflictException(
        `Usuário com id ${userToGrant.user_id} já é professor.`,
      );
    }

    const usersUsertype = this.grantEducatorTypeToUserRepo.create(userToGrant);
    return await this.grantEducatorTypeToUserRepo.save(usersUsertype);
  }

  async deleteEducatorTypeFromUser(user_id: number) {
    try {
      const result = await this.grantEducatorTypeToUserRepo.delete({
        user_id: user_id,
        user_type_id: this.USER_TYPE_TO_BE_CHANGED,
      });

      if (result.affected == 0) {
        return {
          error: common.HttpStatus.NOT_FOUND,
          message: `O usuário com id ${user_id} não é professor.`,
        };
      }

      return result;
    } catch (error: unknown) {
      return {
        error: common.HttpStatus.NOT_FOUND,
        message: error,
      };
    }
  }
}
