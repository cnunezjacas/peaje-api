import { Operador } from '../entities/operador.entity';
import { CreateOperadorDto } from '../dtos/create-operador.dto';
import { UpdateOperadorDto } from '../dtos/update-operador.dto';

// 1. Token de inyección único
export const OPERADOR_REPOSITORY = 'OperadorRepository';

// 2. Contrato del repositorio
export interface OperadorRepository {
  create(createOperadorDto: CreateOperadorDto): Promise<Operador>;

  update(id: string, updateOperadorDto: UpdateOperadorDto): Promise<Operador>;

  delete(id: string): Promise<Operador>;

  findOne(id: string): Promise<Operador>;

  findAll(): Promise<Operador[]>;
}
