import { Module } from '@nestjs/common';
import { AbsenceModule } from './absence/absence.module';
import { AbsenceTypeModule } from './absenceType/absencetype.module';
import { AuthModule } from './auth/auth.module';
import { ModalidadeModule } from './modalidades/modalidade.module';
import { UsersModule } from './users/users.module';
import { UserTypeModule } from './userType/userType.module';
import { UserClassModule } from './userClass/userClass.module';
import { ClassModule } from './class/class.module';
import { ClassRoomModule } from './classRoom/classRoom.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ModalidadeModule,
    UserTypeModule,
    AbsenceModule,
    AbsenceTypeModule,
    UserClassModule,
    ClassModule,
    ClassRoomModule,
  ],
})
export class ApiModule {}
