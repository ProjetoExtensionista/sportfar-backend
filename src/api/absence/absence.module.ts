import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Absence } from '../../domain/entities/Absence';
import { AbsenceController } from './abscence.controller';
import { AbsenceService } from './absence.service';

@Module({
  imports: [TypeOrmModule.forFeature([Absence])],
  providers: [AbsenceService],
  exports: [AbsenceService],
  controllers: [AbsenceController],
})
export class AbsenceModule {}
