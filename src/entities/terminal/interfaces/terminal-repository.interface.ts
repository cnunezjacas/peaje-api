import { CreateTerminalDto } from '../dtos/create-terminal.dto';
import { UpdateTerminalDto } from '../dtos/update-terminal.dto';
import { Terminal } from '../entities/terminal.entity';

// 1. Token de inyección único
export const TERMINAL_REPOSITORY = 'TerminalRepository';

// 2. Contrato del repositorio
export interface TerminalRepository {
  create(createTerminalDto: CreateTerminalDto): Promise<Terminal>;

  update(id: string, updateTerminalDto: UpdateTerminalDto): Promise<Terminal>;

  delete(id: string): Promise<Terminal>;

  findAll(): Promise<Terminal[]>;

  findOne(id: string): Promise<Terminal>;
}
