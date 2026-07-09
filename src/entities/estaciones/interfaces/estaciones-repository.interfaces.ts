import { CreateEstacionesDto, EstacionesDto } from '../dtos/estaciones.dto';
import { Estaciones } from '../entities/estaciones.entity';

export const ESTACIONES_REPOSITORY = 'EstacionesRepository';

export interface EstacionesRepository {
  create(createEstacionesDto: CreateEstacionesDto): Promise<Estaciones>;

  update(id: string, estacionesDto: EstacionesDto): Promise<Estaciones>;

  delete(id: string): Promise<Estaciones>;

  findAll(estacionesDto: EstacionesDto): Promise<Estaciones[]>;

  findOne(id: string): Promise<Estaciones>;
}
