import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassService } from './class.service';
import { Class } from '../../domain/entities/Class';
import { ClassController } from './class.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Class])],
  providers: [ClassService],
  exports: [ClassService],
  controllers: [ClassController],
})
export class ClassModule {}
