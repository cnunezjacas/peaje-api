import { Inject, Injectable } from '@nestjs/common';
import {
  ESTACIONES_REPOSITORY,
  EstacionesRepository,
} from '../interfaces/estaciones-repository.interfaces';
import { Estaciones } from '../entities/estaciones.entity';
import { CreateEstacionesDto, EstacionesDto } from '../dtos/estaciones.dto';

@Injectable()
export class EstacionesService {
  constructor(
    @Inject(ESTACIONES_REPOSITORY)
    private readonly estacionesRepository: EstacionesRepository,
  ) {}

  async create(createEstacionesDto: CreateEstacionesDto): Promise<Estaciones> {
    return await this.estacionesRepository.create(createEstacionesDto);
  }

  async update(id: string, estacionesDto: EstacionesDto): Promise<Estaciones> {
    return await this.estacionesRepository.update(id, estacionesDto);
  }

  async delete(id: string): Promise<Estaciones> {
    return await this.estacionesRepository.delete(id);
  }

  async findAll(estacionesDto: EstacionesDto): Promise<Estaciones[]> {
    return await this.estacionesRepository.findAll(estacionesDto);
  }

  async findOne(id: string): Promise<Estaciones> {
    return await this.estacionesRepository.findOne(id);
  }
}
