import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { TerminalRepository } from '../interfaces/terminal-repository.interface';
import { Terminal } from '../entities/terminal.entity';
import { CreateTerminalDto } from '../dtos/create-terminal.dto';
import { UpdateTerminalDto } from '../dtos/update-terminal.dto';

@Injectable()
export class TerminalMongoRepository implements TerminalRepository {
  constructor(
    @InjectModel(Terminal.name)
    private readonly terminalModel: Model<Terminal>,
  ) {}

  async create(createTerminalDto: CreateTerminalDto): Promise<Terminal> {
    return await new this.terminalModel(createTerminalDto).save();
  }

  async update(id: string, updateTerminalDto: UpdateTerminalDto): Promise<Terminal> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`ID de Terminal no válido: ${id}`);
    }

    const terminalActualizada = await this.terminalModel.findByIdAndUpdate(id, updateTerminalDto, {
      new: true,
    });

    if (!terminalActualizada) {
      throw new NotFoundException(`Terminal con ID ${id} no encontrada`);
    }

    return terminalActualizada;
  }

  async delete(id: string): Promise<Terminal> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`ID de Terminal no válido: ${id}`);
    }

    const terminalEliminada = await this.terminalModel.findByIdAndDelete(id);

    if (!terminalEliminada) {
      throw new NotFoundException(`Terminal con ID ${id} no encontrada`);
    }

    return terminalEliminada;
  }

  async findAll(): Promise<Terminal[]> {
    return await this.terminalModel.find().exec();
  }

  async findOne(id: string): Promise<Terminal> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`ID de Terminal no válido: ${id}`);
    }

    const terminal = await this.terminalModel.findById(id);

    if (!terminal) {
      throw new NotFoundException(`Terminal con ID ${id} no encontrada`);
    }

    return terminal;
  }
}
