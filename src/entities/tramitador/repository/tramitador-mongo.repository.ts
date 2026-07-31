import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Tramitador } from '../entities/tramitador.entity';
import { CreateTramitadorDto } from '../dtos/create-tramitador.dto';
import { UpdateTramitadorDto } from '../dtos/update-tramitador.dto';
import { TramitadorRepository } from '../interfaces/tramitador-repository.interface';

@Injectable()
export class TramitadorMongoRepository implements TramitadorRepository {
  constructor(@InjectModel(Tramitador.name) private readonly model: Model<Tramitador>) {}

  async create(dto: CreateTramitadorDto): Promise<Tramitador> {
    return await new this.model(dto).save();
  }

  async update(id: string, dto: UpdateTramitadorDto): Promise<Tramitador> {
    if (!Types.ObjectId.isValid(id)) throw new NotFoundException(`ID no válido: ${id}`);
    const actualizado = await this.model.findByIdAndUpdate(id, dto, { new: true });
    if (!actualizado) throw new NotFoundException(`Tramitador con ID ${id} no encontrado`);
    return actualizado;
  }

  async delete(id: string): Promise<Tramitador> {
    if (!Types.ObjectId.isValid(id)) throw new NotFoundException(`ID no válido: ${id}`);
    const eliminado = await this.model.findByIdAndDelete(id);
    if (!eliminado) throw new NotFoundException(`Tramitador con ID ${id} no encontrado`);
    return eliminado;
  }

  async findAll(): Promise<Tramitador[]> {
    return await this.model.find().populate('cliente').exec();
  }

  async findOne(id: string): Promise<Tramitador> {
    if (!Types.ObjectId.isValid(id)) throw new NotFoundException(`ID no válido: ${id}`);
    const tramitador = await this.model.findById(id).populate('cliente');
    if (!tramitador) throw new NotFoundException(`Tramitador con ID ${id} no encontrado`);
    return tramitador;
  }
}
