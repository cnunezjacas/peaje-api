import { Inject, Injectable, Logger } from '@nestjs/common';
import { Tramitador } from '../entities/tramitador.entity';
import { CreateTramitadorDto } from '../dtos/create-tramitador.dto';
import { UpdateTramitadorDto } from '../dtos/update-tramitador.dto';
import {
  TramitadorRepository,
  TRAMITADOR_REPOSITORY,
} from '../interfaces/tramitador-repository.interface';

@Injectable()
export class TramitadorService {
  private readonly logger = new Logger(TramitadorService.name);
  constructor(
    @Inject(TRAMITADOR_REPOSITORY) private readonly tramitadorRepository: TramitadorRepository,
  ) {}

  /* ============================================================== */

  async create(dto: CreateTramitadorDto): Promise<Tramitador> {
    this.logger.log(`Creando tramitador: ${dto.nombre} (CI: ${dto.carnetID})`);
    return await this.tramitadorRepository.create(dto);
  }

  /* ============================================================== */
  async findAll(): Promise<Tramitador[]> {
    return await this.tramitadorRepository.findAll();
  }
  /* ============================================================== */
  async findOne(id: string): Promise<Tramitador> {
    return await this.tramitadorRepository.findOne(id);
  }
  /* ============================================================== */
  async update(id: string, dto: UpdateTramitadorDto): Promise<Tramitador> {
    return await this.tramitadorRepository.update(id, dto);
  }
  /* ============================================================== */
  async delete(id: string): Promise<Tramitador> {
    return await this.tramitadorRepository.delete(id);
  }
  /* ============================================================== */
}
