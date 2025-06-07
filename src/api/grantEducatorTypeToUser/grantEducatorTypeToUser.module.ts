import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersUsertype } from '../../domain/entities/UsersUserType';
import { GrantEducatorTypeToUserController } from './grantEducatorTypeToUser.controller';
import { GrantEducatorTypeToUserService } from './grantEducatorTypeToUser.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersUsertype])],
  providers: [GrantEducatorTypeToUserService],
  exports: [GrantEducatorTypeToUserService],
  controllers: [GrantEducatorTypeToUserController],
})
export class GrantEducatorTypeToUserModule {}
