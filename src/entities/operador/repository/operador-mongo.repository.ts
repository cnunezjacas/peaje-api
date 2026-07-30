import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Operador } from '../entities/operador.entity';
import { CreateOperadorDto } from '../dtos/create-operador.dto';
import { UpdateOperadorDto } from '../dtos/update-operador.dto';
import { OperadorRepository } from '../interfaces/operador.interface';

@Injectable()
export class OperadorMongoRepository implements OperadorRepository {
  constructor(
    @InjectModel(Operador.name)
    private readonly operadorModel: Model<Operador>,
  ) {}

  /* ==================================================== */

  async create(createOperadorDto: CreateOperadorDto): Promise<Operador> {
    return await new this.operadorModel(createOperadorDto).save();
  }

  /* ==================================================== */

  async update(id: string, updateOperadorDto: UpdateOperadorDto): Promise<Operador> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`ID de Operador no válido: ${id}`);
    }

    /* ==================================================== */

    const operadorActualizado = await this.operadorModel.findByIdAndUpdate(id, updateOperadorDto, {
      new: true,
    });

    if (!operadorActualizado) {
      throw new NotFoundException(`Operador con ID: ${id} no encontrado`);
    }

    return operadorActualizado;
  }

  /* ==================================================== */

  async delete(id: string): Promise<Operador> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`ID de Operador no válido: ${id}`);
    }

    const operadorEliminado = await this.operadorModel.findByIdAndDelete(id);

    if (!operadorEliminado) {
      throw new NotFoundException(`Operador con ID: ${id} no encontrado`);
    }

    return operadorEliminado;
  }

  /* ==================================================== */

  async findOne(id: string): Promise<Operador> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`ID de Operador no válido: ${id}`);
    }

    const operador = await this.operadorModel.findById(id);

    if (!operador) {
      throw new NotFoundException(`Operador con ID: ${id} no encontrado`);
    }

    return operador;
  }

  /* ==================================================== */

  async findAll(): Promise<Operador[]> {
    return await this.operadorModel.find().exec();
  }

  /* ==================================================== */
}
