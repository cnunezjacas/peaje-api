import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDto } from '../dtos/create-cliente.dto';
import { UpdateClienteDto } from '../dtos/update-cliente.dto';

export const CLIENTE_REPOSITORY = 'ClienteRepository';

export interface ClienteRepository {
  /*======================================================*/
  create(createClienteDto: CreateClienteDto): Promise<Cliente>;
  /*======================================================*/
  update(id: string, updateClienteDto: UpdateClienteDto): Promise<Cliente>;
  /*======================================================*/
  delete(id: string): Promise<Cliente>;
  /*======================================================*/
  findAll(): Promise<Cliente[]>;
  /*======================================================*/
  findOne(id: string): Promise<Cliente>;
}
