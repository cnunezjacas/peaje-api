import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoCuentaDto, TipoCuentaDto } from '../dtos/tipo-cuenta.dto';
import { TipoCuentaRepository } from '../interfaces/tipo-cuenta-repository.interfaces';
import { TipoCuenta } from '../entities/tipo-cuenta.entity';

@Injectable()
export class TipoCuentaMongoRespository implements TipoCuentaRepository {
  constructor(
    @InjectModel(TipoCuenta.name)
    private readonly tipoCuentaModel: Model<TipoCuenta>,
  ) {}

  async create(createTipoCuentaDto: CreateTipoCuentaDto): Promise<TipoCuenta> {
    return await new this.tipoCuentaModel(createTipoCuentaDto).save();
  }

  async update(id: string, tipoCuentaDto: TipoCuentaDto): Promise<TipoCuenta> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Tipo de Cuenta no válido');
    const tipoCuenta = await this.tipoCuentaModel
      .findByIdAndUpdate(id, tipoCuentaDto, { new: true })
      .exec();
    if (!tipoCuenta) throw new NotFoundException('Organismo not found');
    return <TipoCuenta>tipoCuenta;
  }

  async delete(id: string): Promise<TipoCuenta> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Tipo de Cuenta no válido');
    const tipoCuenta = await this.tipoCuentaModel.findByIdAndDelete(id);
    if (!tipoCuenta) throw new NotFoundException('Tipo de cuenta not found');
    return tipoCuenta;
  }

  async findAll(tipoCuentaDto: TipoCuentaDto): Promise<TipoCuenta[]> {
    const { nombre, codigo } = tipoCuentaDto;
    let tipoCuentas: TipoCuenta[] = new Array<TipoCuenta>();
    let query = this.tipoCuentaModel.find();
    if (nombre) query.where('nombre', nombre);
    if (codigo) query.where('codigo', codigo);
    const result = await query.exec();
    result.forEach((tipoCuenta) => {
      tipoCuentas.push(tipoCuenta);
    });
    return tipoCuentas;
  }

  async findOne(id: string): Promise<TipoCuenta> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id TipoCuenta no válido');
    const tipoCuenta = await this.tipoCuentaModel.findById(id);
    if (!tipoCuenta) throw new NotFoundException('TipoCuenta not found');
    return tipoCuenta;
  }
}
