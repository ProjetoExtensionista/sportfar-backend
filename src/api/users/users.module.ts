import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserClass } from 'src/domain/entities/UserClass';
import { UserUserType } from 'src/domain/entities/UserUserType';
import { User } from '../../domain/entities/User';
import { UserController } from './user.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserClass, UserUserType])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UserController],
})
export class UsersModule {}
