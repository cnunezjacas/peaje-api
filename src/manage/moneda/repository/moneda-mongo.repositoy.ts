import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMonedaDto, MonedaDto } from '../dtos/moneda.dto';
import { MonedaRepository } from '../interfaces/moneda-repository.interface';
import { Moneda } from '../entities/moneda.entity';

@Injectable()
export class MonedaMongoRespository implements MonedaRepository {
  constructor(
    @InjectModel(Moneda.name)
    private readonly monedaModel: Model<Moneda>,
  ) {}

  async create(createMonedaDto: CreateMonedaDto): Promise<Moneda> {
    const moneda = await new this.monedaModel(createMonedaDto).save();
    return moneda;
  }

  async update(id: string, monedaDto: MonedaDto): Promise<Moneda> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Moneda no válido');
    const moneda = await this.monedaModel.findByIdAndUpdate(id, monedaDto, { new: true }).exec();
    if (!moneda) throw new NotFoundException('Moneda not found');
    return <Moneda>moneda;
  }

  async delete(id: string): Promise<Moneda> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Moneda no válido');
    const moneda = await this.monedaModel.findByIdAndDelete(id);
    if (!moneda) throw new NotFoundException('Moneda not found');
    return moneda;
  }
  //TODO mejorar el filtrado de los datos
  async findAll(monedaDto: MonedaDto): Promise<Moneda[]> {
    let monedas: Moneda[] = new Array<Moneda>();
    let result = await this.monedaModel.find(monedaDto).exec();
    result.forEach((moneda) => {
      monedas.push(moneda);
    });
    return monedas;
  }

  async findOne(id: string): Promise<Moneda> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Moneda no válido');
    const moneda = await this.monedaModel.findById(id);
    if (!moneda) throw new NotFoundException('Moneda not found');
    return moneda;
  }
}
