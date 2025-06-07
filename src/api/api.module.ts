import { Module } from '@nestjs/common';
import { AbsenceModule } from './absence/absence.module';
import { AbsenceTypeModule } from './absenceType/absencetype.module';
import { AuthModule } from './auth/auth.module';
import { EducatorClassesModule } from './educatorClasses/educatorclasses.module';
import { GrantEducatorTypeToUserModule } from './grantEducatorTypeToUser/grantEducatorTypeToUser.module';
import { UsersModule } from './users/users.module';
import { UserTypeModule } from './userType/userType.module';
import { ClassModule } from './classes/class.module';
import { CourseModule } from './courses/course.module';
import { UsersModule } from './users/users.module';
import { UserTypeModule } from './userType/userType.module';
import { UserClassModule } from './userClass/userClass.module';
import { ClassRoomModule } from './classRoom/classRoom.module';
import { EducatorClassesModule } from './educatorClasses/educatorclasses.module';

@Module({
  imports: [
    AbsenceModule,
    AbsenceTypeModule,
    AuthModule,
    ClassModule,
    CourseModule,
    UsersModule,
    UserTypeModule,
    AbsenceModule,
    AbsenceTypeModule,
    UserClassModule,
    ClassModule,
    ClassRoomModule,
    EducatorClassesModule,
    GrantEducatorTypeToUserModule,
  ],
})
export class ApiModule {}
