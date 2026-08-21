import { Inject, Injectable, Logger } from '@nestjs/common';
import { MUNICIPIO_REPOSITORY } from '../interfaces/municipio-repository.interface';
import { Municipio } from '../entities/municipio.entity';
import { CreateMunicipioDto } from '../dtos/create-municipio.dto';
import { UpdateMunicipioDto } from '../dtos/update-municipio.dto';

@Injectable()
export class MunicipioService {
  private readonly logger = new Logger(MunicipioService.name);

  constructor(
    @Inject(MUNICIPIO_REPOSITORY)
    private readonly municipioRepository,
  ) {}

  async create(createMunicipioDto: CreateMunicipioDto): Promise<Municipio> {
    return await this.municipioRepository.create(createMunicipioDto);
  }

  async update(id: string, updateMunicipioDto: UpdateMunicipioDto): Promise<Municipio> {
    return await this.municipioRepository.update(id, updateMunicipioDto);
  }

  async delete(id: string): Promise<Municipio> {
    return await this.municipioRepository.delete(id);
  }

  async findAll(): Promise<Municipio[]> {
    return await this.municipioRepository.findAll();
  }

  async findOne(id: string): Promise<Municipio> {
    return await this.municipioRepository.findOne(id);
  }

  /*   async deleteMany(idProvincia: string): Promise<number> {
    return await this.municipioRepository.deleteMany(idProvincia);
  } */
}
