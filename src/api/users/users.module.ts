import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from '../../domain/entities/User';
import { UserController } from './user.controller';
import { UserClass } from 'src/domain/entities/UserClass';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserClass])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UserController],
})
export class UsersModule {}
