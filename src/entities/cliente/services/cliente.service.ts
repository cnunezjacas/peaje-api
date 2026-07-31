import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDto } from '../dtos/create-cliente.dto';
import { UpdateClienteDto } from '../dtos/update-cliente.dto';
import { ClienteRepository, CLIENTE_REPOSITORY } from '../interfaces/cliente-repository.interface';

@Injectable()
export class ClienteService {
  private readonly logger = new Logger(ClienteService.name);

  constructor(@Inject(CLIENTE_REPOSITORY) private readonly clienteRepository: ClienteRepository) {}

  /* ================================================================================= */

  async create(dto: CreateClienteDto): Promise<Cliente> {
    this.logger.log(`Creando nuevo cliente: ${dto.nombre} (Código: ${dto.codigo})`);
    return await this.clienteRepository.create(dto);
  }

  /* ================================================================================= */

  async findAll(): Promise<Cliente[]> {
    this.logger.log('Obteniendo todos los clientes');
    return await this.clienteRepository.findAll();
  }

  /* ================================================================================= */

  async findOne(id: string): Promise<Cliente> {
    this.logger.log(`Buscando cliente con ID: ${id}`);
    return await this.clienteRepository.findOne(id);
  }

  /* ================================================================================= */

  async update(id: string, dto: UpdateClienteDto): Promise<Cliente> {
    this.logger.log(`Actualizando cliente con ID: ${id}`);
    return await this.clienteRepository.update(id, dto);
  }

  /* ================================================================================= */

  async delete(id: string): Promise<Cliente> {
    this.logger.log(`Eliminando cliente con ID: ${id}`);
    return await this.clienteRepository.delete(id);
  }

  /* ================================================================================= */
}
