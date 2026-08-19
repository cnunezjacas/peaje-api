import { CreateCuentaDto, CuentaDto } from '../dtos/cuenta.dto';
import { Cuenta } from '../entities/cuenta.entity';

export const CUENTA_REPOSITORY = 'CuentaRepository';

export interface CuentaRepository {
  create(createCuentaDto: CreateCuentaDto): Promise<Cuenta>;

  update(id: string, cuentaDto: CuentaDto): Promise<Cuenta>;

  delete(id: string): Promise<Cuenta>;

  findAll(cuentaDto: CuentaDto): Promise<Cuenta[]>;

  findOne(id: string): Promise<Cuenta>;
}
