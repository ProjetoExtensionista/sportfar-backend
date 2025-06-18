import { Module } from '@nestjs/common';
import { AbsenceModule } from './absence/absence.module';
import { AbsenceTypeModule } from './absenceType/absencetype.module';
import { AuthModule } from './auth/auth.module';
import { ClassModule } from './classes/class.module';
import { ClassRoomModule } from './classRoom/classRoom.module';
import { CourseModule } from './courses/course.module';
import { EducatorClassModule } from './educatorClass/educatorClass.module';
import { GrantEducatorTypeToUserModule } from './grantEducatorTypeToUser/grantEducatorTypeToUser.module';
import { ReportsModule } from './reports/reports.module';
import { UserClassModule } from './userClass/userClass.module';
import { UsersModule } from './users/users.module';
import { UserTypeModule } from './userType/userType.module';

@Module({
  imports: [
    AbsenceModule,
    AbsenceTypeModule,
    AuthModule,
    ClassModule,
    ClassRoomModule,
    CourseModule,
    EducatorClassModule,
    GrantEducatorTypeToUserModule,
    UsersModule,
    UserClassModule,
    UserTypeModule,
    ReportsModule,
  ],
})
export class ApiModule {}
