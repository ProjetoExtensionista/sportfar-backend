import { PartialType } from '@nestjs/swagger';
import { CreateEducatorClassDto } from './createEducatorClass.dto';

export class UpdateEducatorClassDto extends PartialType(
  CreateEducatorClassDto,
) {}
