import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassRoomService } from './classRoom.service';
import { ClassRoom } from '../../domain/entities/ClassRoom';
import { ClassRoomController } from './classRoom.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClassRoom])],
  providers: [ClassRoomService],
  exports: [ClassRoomService],
  controllers: [ClassRoomController],
})
export class ClassRoomModule {}
