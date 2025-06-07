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
import { Class } from 'src/domain/entities/Class';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { ClassService } from './class.service';
import { CreateClassDto } from './models/createClass.dto';
import { UpdateClassDto } from './models/updateClass.dto';

@Controller('classes')
@ApiUnauthorizedResponse()
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ClassController {
  constructor(private readonly service: ClassService) {}

  @Post()
  @ApiOkResponse({ type: Class })
  create(@Body() dto: CreateClassDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOkResponse({ type: Class, isArray: true })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Class })
  @ApiNotFoundResponse()
  async findOne(@Param('id') id: string) {
    const model = await this.service.findOne(+id);

    if (model == null) {
      throw new NotFoundException();
    }

    return model;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateClassDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
