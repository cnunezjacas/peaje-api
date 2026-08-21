import { Cuenta } from '../entities/cuenta.entity';
import { CreateCuentaDto } from '../dtos/create-cuenta.dto';
import { UpdateCuentaDto } from '../dtos/update-cuenta.dto';

// 1. Token de inyección único
export const CUENTA_REPOSITORY = 'CuentaRepository';

export interface CuentaRepository {
  create(createCuentaDto: CreateCuentaDto): Promise<Cuenta>;

  update(id: string, updateCuentaDto: UpdateCuentaDto): Promise<Cuenta>;

  delete(id: string): Promise<Cuenta>;

  findAll(): Promise<Cuenta[]>;

  findOne(id: string): Promise<Cuenta>;
}
