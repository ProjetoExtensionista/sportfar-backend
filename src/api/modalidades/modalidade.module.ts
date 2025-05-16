import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/domain/entities/Company';
import { Course } from 'src/domain/entities/Course';
import { ModalidadeController } from './modalidade.controller';
import { ModalidadeService } from './modalidade.service';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Company])],
  controllers: [ModalidadeController],
  providers: [ModalidadeService],
})
export class ModalidadeModule {}
