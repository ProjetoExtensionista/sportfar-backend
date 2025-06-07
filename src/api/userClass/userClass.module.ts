import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserClass } from 'src/domain/entities/UserClass';
import { UserClassController } from './userClass.controller';
import { UserClassService } from './userClass.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserClass])],
  providers: [UserClassService],
  exports: [UserClassService],
  controllers: [UserClassController],
})
export class UserClassModule {}
