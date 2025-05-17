import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserType } from 'src/domain/entities/UserType';
import { UserTypeController } from './userType.controller';
import { UserTypeService } from './userType.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserType])],
  providers: [UserTypeService],
  exports: [UserTypeService],
  controllers: [UserTypeController],
})
export class UserTypeModule {}
