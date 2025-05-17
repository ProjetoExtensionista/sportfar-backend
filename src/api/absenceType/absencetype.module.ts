import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbsenceType } from '../../domain/entities/AbsenceType';
import { AbsenceTypeController } from './absencetype.controller';
import { AbsenceTypeService } from './absencetype.service';

@Module({
  imports: [TypeOrmModule.forFeature([AbsenceType])],
  providers: [AbsenceTypeService],
  exports: [AbsenceTypeService],
  controllers: [AbsenceTypeController],
})
export class AbsenceTypeModule {}
