import { Injectable, Inject, Logger } from '@nestjs/common';

import { Operador } from '../entities/operador.entity';
import { CreateOperadorDto } from '../dtos/create-operador.dto';
import { UpdateOperadorDto } from '../dtos/update-operador.dto';
import { OperadorRepository, OPERADOR_REPOSITORY } from '../interfaces/operador-repository.interface';

@Injectable()
export class OperadorService {
  private readonly logger = new Logger(OperadorService.name);

  constructor(
    @Inject(OPERADOR_REPOSITORY)
    private readonly operadorRepository: OperadorRepository,
  ) {}

  /* ================================================= */

  async create(createOperadorDto: CreateOperadorDto): Promise<Operador> {
    this.logger.log(`Creando nuevo operador con código: ${createOperadorDto.nombre}`);

    return await this.operadorRepository.create(createOperadorDto);
  }

  /* ================================================= */

  async findAll(): Promise<Operador[]> {
    this.logger.log('Obteniendo todos los Operadores');
    return await this.operadorRepository.findAll();
  }

  /* ================================================= */

  async findOne(id: string): Promise<Operador> {
    this.logger.log(`Buscando Operador con ID ${id}`);
    return await this.operadorRepository.findOne(id);
  }

  /* ================================================= */

  async update(id: string, updateOperadorDto: UpdateOperadorDto): Promise<Operador> {
    this.logger.log(`Actualizando Operador con ID ${id}`);
    return await this.operadorRepository.update(id, updateOperadorDto);
  }

  /* ================================================= */

  async delete(id: string): Promise<Operador> {
    this.logger.log(`Eliminando Operador con ID ${id}`);
    return await this.operadorRepository.delete(id);
  }

  /* ================================================= */
}
