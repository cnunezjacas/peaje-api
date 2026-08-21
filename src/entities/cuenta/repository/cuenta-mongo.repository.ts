import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCuentaDto } from '../../cuenta/dtos/create-cuenta.dto';
import { UpdateCuentaDto } from '../dtos/update-cuenta.dto';
import { CuentaRepository } from '../../cuenta/interfaces/cuenta-repository.interfaces';
import { Cuenta } from '../../cuenta/entities/cuenta.entity';

@Injectable()
export class CuentaMongoRespository implements CuentaRepository {
  constructor(
    @InjectModel(Cuenta.name)
    private readonly cuentaModel: Model<Cuenta>,
  ) {}

  async create(createCuentaDto: CreateCuentaDto): Promise<Cuenta> {
    return await new this.cuentaModel(createCuentaDto).save();
  }

  async update(id: string, updateCuentaDto: UpdateCuentaDto): Promise<Cuenta> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Tipo de Cuenta no válido');
    const cuenta = await this.cuentaModel.findByIdAndUpdate(id, updateCuentaDto, { new: true }).exec();
    if (!cuenta) throw new NotFoundException('Cuenta not found');
    return cuenta;
  }

  async delete(id: string): Promise<Cuenta> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Cuenta no válido');
    const cuenta = await this.cuentaModel.findByIdAndDelete(id);
    if (!cuenta) throw new NotFoundException('Cuenta not found');
    return cuenta;
  }

  async findAll(): Promise<Cuenta[]> {
    return await this.cuentaModel.find().populate('banco tipo').exec();
  }

  async findOne(id: string): Promise<Cuenta> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Cuenta no válido');
    const cuenta = await this.cuentaModel.findById(id);
    if (!cuenta) throw new NotFoundException('Cuenta not found');
    return cuenta;
  }
}
