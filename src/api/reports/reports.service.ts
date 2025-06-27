import { Inject } from '@nestjs/common';
import { DataSource } from 'typeorm';

export class ReportsService {
  constructor(@Inject(DataSource) private dataSource: DataSource) {}

  async getUsersWithType(fullName?: string, userType?: string) {
    const query = this.dataSource
      .createQueryBuilder()
      .select(['user.full_name', 'usertype.type'])
      .from('USERS', 'user')
      .innerJoin('USERS_USERTYPE', 'uut', 'uut.user_id = user.id')
      .innerJoin('USERTYPE', 'usertype', 'usertype.id = uut.user_type_id');

    if (fullName) {
      query.andWhere('user.full_name LIKE :fullName', { fullName: fullName });
    }

    if (userType) {
      query.andWhere('usertype.type = :type', { type: userType });
    }

    const result = await query.getRawMany();
    return result;
  }
}
