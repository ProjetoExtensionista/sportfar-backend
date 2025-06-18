import { Module } from '@nestjs/common';
import { ReportController } from './reports.controller';
import { ReportsService } from './reports.service';

@Module({
  providers: [ReportsService],
  exports: [ReportsService],
  controllers: [ReportController],
})
export class ReportsModule {}
