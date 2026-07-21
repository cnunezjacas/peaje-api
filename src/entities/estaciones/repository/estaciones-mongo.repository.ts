import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstacionesDto, EstacionesDto } from '../dtos/estaciones.dto';
import { EstacionesRepository } from '../interfaces/estaciones-repository.interfaces';
import { Estaciones } from '../entities/estaciones.entity';

@Injectable()
export class EstacionesMongoRespository implements EstacionesRepository {
  constructor(
    @InjectModel(Estaciones.name)
    private readonly estacionesModel: Model<Estaciones>,
  ) {}

  async create(createEstacionesDto: CreateEstacionesDto): Promise<Estaciones> {
    return await new this.estacionesModel(createEstacionesDto).save();
  }

  async update(id: string, estacionesDto: EstacionesDto): Promise<Estaciones> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id de Estación no válido');
    const estacion = await this.estacionesModel
      .findByIdAndUpdate(id, estacionesDto, { new: true })
      .exec();
    if (!estacion) throw new NotFoundException('Estación not found');
    return estacion;
  }

  async delete(id: string): Promise<Estaciones> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Estacion no válido');
    const estacion = await this.estacionesModel.findByIdAndDelete(id);
    if (!estacion) throw new NotFoundException('Estacion not found');
    return estacion;
  }

  async findAll(estacionesDto: EstacionesDto): Promise<Estaciones[]> {
    const { codigo, nombre } = estacionesDto;
    let estaciones: Estaciones[] = new Array<Estaciones>();
    let query = this.estacionesModel.find();
    if (codigo) query.where('codigo', codigo);
    if (nombre) query.where('nombre', nombre);
    const result = await query.exec();
    result.forEach((estacion) => {
      estaciones.push(estacion);
    });
    return estaciones;
  }

  async findOne(id: string): Promise<Estaciones> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id de Estación no válido');
    const estacion = await this.estacionesModel.findById(id);
    if (!estacion) throw new NotFoundException('Estación not found');
    return estacion;
  }
}
