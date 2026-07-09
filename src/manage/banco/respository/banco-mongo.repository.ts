import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBancoDto, BancoDto } from '../dtos/banco.dto';
import { BancoRepository } from '../interfaces/banco-repository.interfaces';
import { Banco } from '../entities/banco.entity';

@Injectable()
export class BancoMongoRespository implements BancoRepository {
  constructor(
    @InjectModel(Banco.name)
    private readonly bancoModel: Model<Banco>,
  ) {}

  async create(createBancoDto: CreateBancoDto): Promise<Banco> {
    return await new this.bancoModel(createBancoDto).save();
  }

  async update(id: string, bancoDto: BancoDto): Promise<Banco> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Banco no válido');
    const banco = await this.bancoModel.findByIdAndUpdate(id, bancoDto, { new: true }).exec();
    if (!banco) throw new NotFoundException('Organismo not found');
    return <Banco>banco;
  }

  async delete(id: string): Promise<Banco> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Banco no válido');
    const banco = await this.bancoModel.findByIdAndDelete(id);
    if (!banco) throw new NotFoundException('Banco not found');
    return banco;
  }

  async findAll(bancoDto: BancoDto): Promise<Banco[]> {
    const { nombre, codigo, detalles } = bancoDto;
    let bancos: Banco[] = new Array<Banco>();
    let query = this.bancoModel.find();
    if (nombre) query.where('nombre', nombre);
    if (codigo) query.where('codigo', codigo);
    const result = await query.exec();
    result.forEach((banco) => {
      bancos.push(banco);
    });
    return bancos;
  }

  async findOne(id: string): Promise<Banco> {
    const isValid = Types.ObjectId.isValid(id);
    if (!isValid) throw new NotFoundException('Id Banco no válido');
    const banco = await this.bancoModel.findById(id);
    if (!banco) throw new NotFoundException('Banco not found');
    return banco;
  }
}
