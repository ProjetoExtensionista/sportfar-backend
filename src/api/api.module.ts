import { Module } from '@nestjs/common';
import { AbsenceModule } from './absence/absence.module';
import { AbsenceTypeModule } from './absenceType/absencetype.module';
import { AuthModule } from './auth/auth.module';
import { ClassModule } from './classes/class.module';
import { CourseModule } from './courses/course.module';
import { UsersModule } from './users/users.module';
import { UserTypeModule } from './userType/userType.module';

@Module({
  imports: [
    AbsenceModule,
    AbsenceTypeModule,
    AuthModule,
    ClassModule,
    CourseModule,
    UsersModule,
    UserTypeModule,
  ],
})
export class ApiModule {}
