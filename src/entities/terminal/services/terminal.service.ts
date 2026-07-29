import { Inject, Injectable, Logger } from '@nestjs/common';

import {
  TerminalRepository,
  TERMINAL_REPOSITORY,
} from '../interfaces/terminal-repository.interface';
import { Terminal } from '../entities/terminal.entity';
import { CreateTerminalDto } from '../dtos/create-terminal.dto';
import { UpdateTerminalDto } from '../dtos/update-terminal.dto';

@Injectable()
export class TerminalService {
  private readonly logger = new Logger(TerminalService.name);

  constructor(
    @Inject(TERMINAL_REPOSITORY)
    private readonly terminalRepository: TerminalRepository,
  ) {}

  async create(createTerminalDto: CreateTerminalDto): Promise<Terminal> {
    this.logger.log(`Creando nueva terminal con código: ${createTerminalDto.codigo}`);
    return await this.terminalRepository.create(createTerminalDto);
  }

  async update(id: string, updateTerminalDto: UpdateTerminalDto): Promise<Terminal> {
    this.logger.log(`Actualizando terminal con ID: ${id}`);
    return await this.terminalRepository.update(id, updateTerminalDto);
  }

  async delete(id: string): Promise<Terminal> {
    this.logger.log(`Eliminando terminal con ID: ${id}`);
    // Aquí podrías agregar lógica futura: "¿Tiene colectas asociadas? No dejar borrar".
    return await this.terminalRepository.delete(id);
  }

  async findAll(): Promise<Terminal[]> {
    this.logger.log('Obteniendo todas las terminales');
    return await this.terminalRepository.findAll();
  }

  async findOne(id: string): Promise<Terminal> {
    this.logger.log(`Buscando terminal con ID: ${id}`);
    return await this.terminalRepository.findOne(id);
  }
}
