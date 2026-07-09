import { CreateTipoCuentaDto, TipoCuentaDto } from '../dtos/tipo-cuenta.dto';
import { TipoCuenta } from '../entities/tipo-cuenta.entity';

export const TIPO_CUENTA_REPOSITORY = 'TipoCuentaRepository';

export interface TipoCuentaRepository {
  create(createTipoCuentaDto: CreateTipoCuentaDto): Promise<TipoCuenta>;

  update(id: string, tipoCuentaDto: TipoCuentaDto): Promise<TipoCuenta>;

  delete(id: string): Promise<TipoCuenta>;

  findAll(bancoDto: TipoCuentaDto): Promise<TipoCuenta[]>;

  findOne(id: string): Promise<TipoCuenta>;
}
