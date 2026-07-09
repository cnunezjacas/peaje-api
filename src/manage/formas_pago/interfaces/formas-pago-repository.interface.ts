import { CreateFormasDePagoDto, FormasDePagoDto } from '../dtos/formas-pago.dto';
import { FormasDePago } from '../entities/formas-pago.entity';

export const FORMAS_PAGO_REPOSITORY = 'FormasDePagoRepository';

export interface FormasDePagoRepository {
  create(createFormasDePago: CreateFormasDePagoDto): Promise<FormasDePago>;

  update(id: string, formasDePagoDto: FormasDePagoDto): Promise<FormasDePago>;

  delete(id: string): Promise<FormasDePago>;

  findAll(formasDePago: FormasDePagoDto): Promise<FormasDePago[]>;

  findOne(id: string): Promise<FormasDePago>;
}
