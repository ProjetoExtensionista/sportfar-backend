import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ModalidadeModule } from './modalidades/modalidade.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule, ModalidadeModule],
})
export class ApiModule {}
