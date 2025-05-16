import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateModalidadeDto } from "./create-modalidade.dto";
import { Modalidade } from "./modalidade.entity";
import { UpdateModalidadeDto } from "./update-modalidade.dto";

@Injectable()
export class ModalidadeService {
  constructor(
    @InjectRepository(Modalidade)
    private modalidadeRepo: Repository<Modalidade>,
  ) {}

  create(dto: CreateModalidadeDto) {
    const modalidade = this.modalidadeRepo.create(dto);
    return this.modalidadeRepo.save(modalidade);
  }

  findAll() {
    return this.modalidadeRepo.find();
  }

  findOne(id: number) {
    return this.modalidadeRepo.findOneBy({ id });
  }

  update(id: number, dto: UpdateModalidadeDto) {
    return this.modalidadeRepo.update(id, dto);
  }

  remove(id: number) {
    return this.modalidadeRepo.delete(id);
  }
}