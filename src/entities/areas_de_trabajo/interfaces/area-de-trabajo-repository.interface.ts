import { CreateAreaDeTrabajoDto } from '../dtos/create-area-de-trabajo.dto';
import { UpdateAreaDeTrabajoDto } from '../dtos/update-area-de-trabajo.dto';
import { AreaDeTrabajo } from '../entities/area-de-trabajo.entity';

// 1. Token de inyección: Es un string único que NestJS usará para saber qué inyectar.
// Convención: NOMBRE_EN_MAYUSCULAS + _REPOSITORY
export const AREA_DE_TRABAJO_REPOSITORY = 'AreaDeTrabajoRepository';

// 2. La Interface: Define el contrato. No tiene lógica, solo firma de métodos.
export interface AreaDeTrabajoRepository {
  // Crea un nuevo registro y devuelve la entidad creada
  create(createAreaDeTrabajoDto: CreateAreaDeTrabajoDto): Promise<AreaDeTrabajo>;

  // Actualiza un registro por su ID y devuelve la entidad actualizada
  update(id: string, updateAreaDeTrabajoDto: UpdateAreaDeTrabajoDto): Promise<AreaDeTrabajo>;

  // Elimina un registro por su ID y devuelve la entidad eliminada (o void, según prefieras)
  delete(id: string): Promise<AreaDeTrabajo>;

  // Obtiene todos los registros (aquí podrías agregar un DTO de filtros más adelante)
  findAll(): Promise<AreaDeTrabajo[]>;

  // Obtiene un solo registro por su ID
  findOne(id: string): Promise<AreaDeTrabajo>;
}
