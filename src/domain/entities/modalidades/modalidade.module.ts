import { TypeOrmModule } from '@nestjs/typeorm';
import Module from 'module';
import { ModalidadeController } from './modalidade.controller';
import { Modalidade } from './modalidade.entity';
import { ModalidadeService } from './modalidade.service';

@Module({
  imports: [TypeOrmModule.forFeature([Modalidade])],
  controllers: [ModalidadeController],
  providers: [ModalidadeService],
})
export class ModalidadeModule {}
