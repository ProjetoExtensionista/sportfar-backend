import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateModalidadeDto } from "./create-modalidade.dto";
import { ModalidadeService } from "./modalidade.service";
import { UpdateModalidadeDto } from "./update-modalidade.dto";

@Controller('modalidades')
export class ModalidadeController {
  constructor(private readonly service: ModalidadeService) {}

  @Post()
  create(@Body() dto: CreateModalidadeDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateModalidadeDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}