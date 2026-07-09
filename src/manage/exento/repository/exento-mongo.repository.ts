import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExentoDto, ExentoDto } from '../dtos/exento.dto';
import { ExentoRepository } from '../interfaces/exento-repository.interface';
import { Exento } from '../entities/exento.entity';

@Injectable()
export class ExentoMongoRespository implements ExentoRepository {
  constructor(
    @InjectModel(Exento.name)
    private readonly exentoModel: Model<Exento>,
  ) {}

  async create(createExentoDto: CreateExentoDto): Promise<Exento> {
    const exento = await new this.exentoModel(createExentoDto).save();
    return exento;
  }

  async update(id: string, exentoDto: ExentoDto): Promise<Exento> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Exento no válido');
    const exento = await this.exentoModel.findByIdAndUpdate(id, exentoDto, { new: true }).exec();
    if (!exento) throw new NotFoundException('Exento not found');
    return <Exento>exento;
  }

  async delete(id: string): Promise<Exento> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Exento no válido');
    const exento = await this.exentoModel.findByIdAndDelete(id);
    if (!exento) throw new NotFoundException('Exento not found');
    return exento;
  }

  async findAll(exentoDto: ExentoDto): Promise<Exento[]> {
    let exentos: Exento[] = new Array<Exento>();
    let result = await this.exentoModel.find(exentoDto).exec();
    result.forEach((exento) => {
      exentos.push(exento);
    });
    return exentos;
  }

  async findOne(id: string): Promise<Exento> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Exento no válido');
    const exento = await this.exentoModel.findById(id);
    if (!exento) throw new NotFoundException('Exento not found');
    return exento;
  }
}
