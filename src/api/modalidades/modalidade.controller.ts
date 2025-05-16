import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Course } from 'src/domain/entities/Course';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { ModalidadeService } from './modalidade.service';
import { CreateModalidadeDto } from './models/create-modalidade.dto';
import { UpdateModalidadeDto } from './models/update-modalidade.dto';

@Controller('modalidades')
@ApiUnauthorizedResponse()
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ModalidadeController {
  constructor(private readonly service: ModalidadeService) {}

  @Post()
  @ApiOkResponse({ type: Course })
  create(@Body() dto: CreateModalidadeDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOkResponse({ type: Course, isArray: true })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Course })
  @ApiNotFoundResponse()
  async findOne(@Param('id') id: string) {
    const course = await this.service.findOne(+id);

    if (course == null) {
      throw new NotFoundException();
    }

    return course;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateModalidadeDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return (await this.service.remove(+id)).affected! > 0;
  }
}
