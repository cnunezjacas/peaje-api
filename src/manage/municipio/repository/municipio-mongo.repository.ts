import { Model, Types } from 'mongoose';
import { CreateMunicipioDto } from '../dtos/create-municipio.dto';
import { UpdateMunicipioDto } from '../dtos/update-municipio.dto';
import { MunicipioRepository } from '../interfaces/municipio-repository.interface';
import { Municipio } from '../entities/municipio.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MunicipioMongoRepository implements MunicipioRepository {
  constructor(
    @InjectModel(Municipio.name)
    private readonly municipioModel: Model<Municipio>,
  ) {}

  async create(createMunicipioDto: CreateMunicipioDto): Promise<Municipio> {
    const municipio = await new this.municipioModel(createMunicipioDto).save();
    return municipio;
  }

  async update(id: string, updateMunicipioDto: UpdateMunicipioDto): Promise<Municipio> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException(`${id} : Id Municipio no válido`);
    const municipio = await this.municipioModel
      .findByIdAndUpdate(id, updateMunicipioDto, { new: true })
      .exec();
    if (!municipio) throw new NotFoundException('Municipio no existe');
    return municipio;
  }

  async delete(id: string): Promise<Municipio> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException(`${id} : Id Municipio no válido`);
    const municipio = await this.municipioModel.findByIdAndDelete(id);
    if (!municipio) throw new NotFoundException('Municipio no existe');
    return municipio;
  }

  async findAll(): Promise<Municipio[]> {
    return await this.municipioModel.find().populate('provincia').exec();
  }

  async findOne(id: string): Promise<Municipio> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException(`${id} : Id Municipio no válido`);
    const municipio = await this.municipioModel.findById(id);
    if (!municipio) throw new NotFoundException('Municipio no existe');
    return municipio;
  }

  /*async deleteMany(idProvincia: string): Promise<number> {
    const isValid = Types.ObjectId.isValid(idProvincia);
    if (!isValid) throw new NotFoundException(`${id} : Id Municipio no válido`);
    const result = await this.municipioModel.deleteMany({ provincia: idProvincia });
    return result.deletedCount;
  } */
}
