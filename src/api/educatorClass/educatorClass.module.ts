import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducatorClass } from '../../domain/entities/EducatorClass';
import { EducatorClassController } from './educatorClass.controller';
import { EducatorClassService } from './educatorClass.service';

@Module({
  imports: [TypeOrmModule.forFeature([EducatorClass])],
  providers: [EducatorClassService],
  exports: [EducatorClassService],
  controllers: [EducatorClassController],
})
export class EducatorClassModule {}
