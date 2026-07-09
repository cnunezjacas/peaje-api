import { CreateBancoDto, BancoDto } from '../dtos/banco.dto';
import { Banco } from '../entities/banco.entity';

export const BANCO_REPOSITORY = 'BancoRepository';

export interface BancoRepository {
  create(createBancoDto: CreateBancoDto): Promise<Banco>;

  update(id: string, bancoDto: BancoDto): Promise<Banco>;

  delete(id: string): Promise<Banco>;

  findAll(bancoDto: BancoDto): Promise<Banco[]>;

  findOne(id: string): Promise<Banco>;
}
