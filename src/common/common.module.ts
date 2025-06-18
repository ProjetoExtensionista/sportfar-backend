import { Module } from '@nestjs/common';
import { ConfigurationModule } from './configuration/configuration.module';
import { DatabaseModule } from './database/database.module';
import { StaticModule } from './static/static.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule, StaticModule],
})
export class CommonModule {}
