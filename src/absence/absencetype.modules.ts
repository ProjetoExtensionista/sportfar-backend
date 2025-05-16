import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbsenceTypeService } from './absencetype.service';
import { AbsenceType } from './Entities/AbsenceType';

@Module({
  imports: [TypeOrmModule.forFeature([AbsenceType])],
  providers: [AbsenceTypeService],
  exports: [AbsenceTypeService],
})
export class AbsenceTypeModule {}
