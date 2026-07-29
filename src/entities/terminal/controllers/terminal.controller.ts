import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { TerminalService } from '../services/terminal.service';
import { CreateTerminalDto } from '../dtos/create-terminal.dto';
import { UpdateTerminalDto } from '../dtos/update-terminal.dto';
import { Terminal } from '../entities/terminal.entity';

@ApiTags('Entities / Terminal')
@Controller('entities/terminal')
export class TerminalController {
  constructor(private readonly terminalService: TerminalService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva terminal' })
  @ApiResponse({ status: 201, description: 'Terminal creada exitosamente.', type: Terminal })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() createTerminalDto: CreateTerminalDto): Promise<Terminal> {
    return await this.terminalService.create(createTerminalDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las terminales' })
  @ApiResponse({ status: 200, description: 'Lista de terminales.', type: [Terminal] })
  async findAll(): Promise<Terminal[]> {
    return await this.terminalService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una terminal por su ID' })
  @ApiResponse({ status: 200, description: 'Terminal encontrada.', type: Terminal })
  @ApiResponse({ status: 404, description: 'Terminal no encontrada.' })
  async findOne(@Param('id') id: string): Promise<Terminal> {
    return await this.terminalService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una terminal por su ID' })
  @ApiResponse({ status: 200, description: 'Terminal actualizada.', type: Terminal })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async update(
    @Param('id') id: string,
    @Body() updateTerminalDto: UpdateTerminalDto,
  ): Promise<Terminal> {
    return await this.terminalService.update(id, updateTerminalDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una terminal por su ID' })
  @ApiResponse({ status: 200, description: 'Terminal eliminada.', type: Terminal })
  async delete(@Param('id') id: string): Promise<Terminal> {
    return await this.terminalService.delete(id);
  }
}
