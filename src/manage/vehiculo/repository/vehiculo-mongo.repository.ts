import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehiculoDto, VehiculoDto } from '../dtos/vehiculo.dto';
import { VehiculoRepository } from '../interfaces/vehiculo-repository.interface';
import { Vehiculo } from '../entities/vehiculo.entity';

@Injectable()
export class VehiculoMongoRespository implements VehiculoRepository {
  constructor(
    @InjectModel(Vehiculo.name)
    private readonly vehiculoModel: Model<Vehiculo>,
  ) {}

  async create(createVehiculoDto: CreateVehiculoDto): Promise<Vehiculo> {
    const vehiculo = await new this.vehiculoModel(createVehiculoDto).save();
    return vehiculo;
  }

  async update(id: string, vehiculoDto: VehiculoDto): Promise<Vehiculo> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Vehiculo no válido');
    const orga = await this.vehiculoModel.findByIdAndUpdate(id, vehiculoDto, { new: true }).exec();
    if (!orga) throw new NotFoundException('Vehiculo not found');
    return <Vehiculo>orga;
  }

  async delete(id: string): Promise<Vehiculo> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Vehiculo no válido');
    const veh = await this.vehiculoModel.findByIdAndDelete(id);
    if (!veh) throw new NotFoundException('Vehiculo not found');
    return veh;
  }

  async findAll(vehiculoDto: VehiculoDto): Promise<Vehiculo[]> {
    let vehiculos: Vehiculo[] = new Array<Vehiculo>();
    let result = await this.vehiculoModel.find(vehiculoDto).exec();
    result.forEach((vehiculo) => {
      vehiculos.push(vehiculo);
    });
    return vehiculos;
  }

  async findOne(id: string): Promise<Vehiculo> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Vehiculo no válido');
    const vehiculo = await this.vehiculoModel.findById(id);
    if (!vehiculo) throw new NotFoundException('Vehiculo not found');
    return vehiculo;
  }
}
