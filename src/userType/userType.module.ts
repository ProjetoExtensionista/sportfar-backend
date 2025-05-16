import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeService } from './userType.service';
import { UserType } from './Entities/UserType';

@Module({
  imports: [TypeOrmModule.forFeature([UserType])],
  providers: [UserTypeService],
  exports: [UserTypeService],
})
export class UsersTypeModule {}
