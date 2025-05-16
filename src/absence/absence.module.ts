import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbsenceService } from './absence.service';
import { Absence } from './Entities/Absence';

@Module({
  imports: [TypeOrmModule.forFeature([Absence])],
  providers: [AbsenceService],
  exports: [AbsenceService],
})
export class AbsenceModule {}
