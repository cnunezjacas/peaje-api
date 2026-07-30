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

import { Operador } from '../entities/operador.entity';
import { CreateOperadorDto } from '../dtos/create-operador.dto';
import { UpdateOperadorDto } from '../dtos/update-operador.dto';
import { OperadorService } from '../services/operador.service';

@ApiTags('Entities / Operador')
@Controller('entities/operador')
export class OperadorController {
  constructor(private readonly operadorService: OperadorService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo Operador' })
  @ApiResponse({ status: 201, description: 'Operador creado exitosamente.', type: Operador })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() createOperadorDto: CreateOperadorDto): Promise<Operador> {
    return await this.operadorService.create(createOperadorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los Operadores' })
  @ApiResponse({ status: 200, description: 'Lista de Operadores.', type: [Operador] })
  async findAll(): Promise<Operador[]> {
    return await this.operadorService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar Operador por su ID' })
  @ApiResponse({ status: 200, description: 'Operador encontrado.', type: Operador })
  @ApiResponse({ status: 404, description: 'Operador no encontrado.' })
  async findOne(@Param('id') id: string): Promise<Operador> {
    return await this.operadorService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar Operador por su ID' })
  @ApiResponse({ status: 200, description: 'Operador actualizado.', type: Operador })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async update(
    @Param('id') id: string,
    @Body() updateOperadorDto: UpdateOperadorDto,
  ): Promise<Operador> {
    return await this.operadorService.update(id, updateOperadorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar Operador por su ID' })
  @ApiResponse({ status: 200, description: 'Operador eliminado.', type: Operador })
  async delete(@Param('id') id: string): Promise<Operador> {
    return await this.operadorService.delete(id);
  }
}
