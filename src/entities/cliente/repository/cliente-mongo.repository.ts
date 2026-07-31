import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDto } from '../dtos/create-cliente.dto';
import { UpdateClienteDto } from '../dtos/update-cliente.dto';
import { ClienteRepository } from '../interfaces/cliente-repository.interface';

@Injectable()
export class ClienteMongoRepository implements ClienteRepository {
  constructor(@InjectModel(Cliente.name) private readonly clienteModel: Model<Cliente>) {}

  /* =============================================================================== */

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    return await new this.clienteModel(createClienteDto).save();
  }

  /* =============================================================================== */

  async update(id: string, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    if (!Types.ObjectId.isValid(id)) throw new NotFoundException(`ID de Cliente no válido: ${id}`);
    const actualizado = await this.clienteModel.findByIdAndUpdate(id, updateClienteDto, {
      new: true,
    });
    if (!actualizado) throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    return actualizado;
  }

  /* =============================================================================== */

  async delete(id: string): Promise<Cliente> {
    if (!Types.ObjectId.isValid(id)) throw new NotFoundException(`ID de Cliente no válido: ${id}`);
    const eliminado = await this.clienteModel.findByIdAndDelete(id);
    if (!eliminado) throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    return eliminado;
  }

  /* =============================================================================== */

  async findAll(): Promise<Cliente[]> {
    return await this.clienteModel
      .find()
      .populate(
        'estacion organismo cuentaCUC bancoCuentaCUC cuentaCUP bancoCuentaCUP provincia municipio',
      )
      .exec();
  }

  /* =============================================================================== */

  async findOne(id: string): Promise<Cliente> {
    if (!Types.ObjectId.isValid(id)) throw new NotFoundException(`ID de Cliente no válido: ${id}`);
    const cliente = await this.clienteModel
      .findById(id)
      .populate(
        'estacion organismo cuentaCUC bancoCuentaCUC cuentaCUP bancoCuentaCUP provincia municipio',
      );
    if (!cliente) throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    return cliente;
  }
  /* =============================================================================== */
}
