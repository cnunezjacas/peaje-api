import { Tramitador } from '../entities/tramitador.entity';
import { CreateTramitadorDto } from '../dtos/create-tramitador.dto';
import { UpdateTramitadorDto } from '../dtos/update-tramitador.dto';

export const TRAMITADOR_REPOSITORY = 'TramitadorRepository';

export interface TramitadorRepository {
  create(dto: CreateTramitadorDto): Promise<Tramitador>;
  update(id: string, dto: UpdateTramitadorDto): Promise<Tramitador>;
  delete(id: string): Promise<Tramitador>;
  findAll(): Promise<Tramitador[]>;
  findOne(id: string): Promise<Tramitador>;
}
