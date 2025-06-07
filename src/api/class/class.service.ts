import * as common from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Class } from '../../domain/entities/Class';

@common.Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private classRepo: Repository<Class>,
  ) {}

  async findById(id: number): Promise<Class | null> {
    return this.classRepo.findOneBy({ id });
  }
}
