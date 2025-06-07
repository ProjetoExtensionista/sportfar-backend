import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducatorClasses } from '../../domain/entities/EducatorClasses';
import { EducatorClassesController } from './educatorclasses.controller';
import { EducatorClassesService } from './educatorclasses.service';

@Module({
  imports: [TypeOrmModule.forFeature([EducatorClasses])],
  providers: [EducatorClassesService],
  exports: [EducatorClassesService],
  controllers: [EducatorClassesController],
})
export class EducatorClassesModule {}
