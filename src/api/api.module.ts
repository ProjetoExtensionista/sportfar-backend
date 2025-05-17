import { Module } from '@nestjs/common';
import { AbsenceModule } from './absence/absence.module';
import { AbsenceTypeModule } from './absenceType/absencetype.module';
import { AuthModule } from './auth/auth.module';
import { ModalidadeModule } from './modalidades/modalidade.module';
import { UsersModule } from './users/users.module';
import { UserTypeModule } from './userType/userType.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ModalidadeModule,
    UserTypeModule,
    AbsenceModule,
    AbsenceTypeModule,
  ],
})
export class ApiModule {}
