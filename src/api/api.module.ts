import { Module } from '@nestjs/common';
import { AbsenceModule } from './absence/absence.module';
import { AbsenceTypeModule } from './absenceType/absencetype.module';
import { AuthModule } from './auth/auth.module';
import { ModalidadeModule } from './modalidades/course.module';
import { UsersModule } from './users/users.module';
import { UserTypeModule } from './userType/userType.module';
import { EducatorClassesModule } from './educatorClasses/educatorclasses.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ModalidadeModule,
    UserTypeModule,
    AbsenceModule,
    AbsenceTypeModule,
    EducatorClassesModule,
  ],
})
export class ApiModule {}
