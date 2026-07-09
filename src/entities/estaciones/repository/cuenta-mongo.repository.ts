import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCuentaDto, CuentaDto } from '../dtos/cuenta.dto';
import { CuentaRepository } from '../interfaces/cuenta-repository.interfaces';
import { Cuenta } from '../entities/cuenta.entity';

@Injectable()
export class CuentaMongoRespository implements CuentaRepository {
  constructor(
    @InjectModel(Cuenta.name)
    private readonly cuentaModel: Model<Cuenta>,
  ) {}

  async create(createCuentaDto: CreateCuentaDto): Promise<Cuenta> {
    return await new this.cuentaModel(createCuentaDto).save();
  }

  async update(id: string, cuentaDto: CuentaDto): Promise<Cuenta> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Tipo de Cuenta no válido');
    const cuenta = await this.cuentaModel.findByIdAndUpdate(id, cuentaDto, { new: true }).exec();
    if (!cuenta) throw new NotFoundException('Cuenta not found');
    return <Cuenta>cuenta;
  }

  async delete(id: string): Promise<Cuenta> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Cuenta no válido');
    const cuenta = await this.cuentaModel.findByIdAndDelete(id);
    if (!cuenta) throw new NotFoundException('Cuenta not found');
    return cuenta;
  }

  async findAll(cuentaDto: CuentaDto): Promise<Cuenta[]> {
    const { titular } = cuentaDto;
    let cuentas: Cuenta[] = new Array<Cuenta>();
    let query = this.cuentaModel.find();
    if (titular) query.where('titular', titular);
    const result = await query.exec();
    result.forEach((cuenta) => {
      cuentas.push(cuenta);
    });
    return cuentas;
  }

  async findOne(id: string): Promise<Cuenta> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Cuenta no válido');
    const cuenta = await this.cuentaModel.findById(id);
    if (!cuenta) throw new NotFoundException('Cuenta not found');
    return cuenta;
  }
}
