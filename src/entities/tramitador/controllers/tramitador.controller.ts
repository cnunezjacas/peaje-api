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
import { TramitadorService } from '../services/tramitador.service';
import { CreateTramitadorDto } from '../dtos/create-tramitador.dto';
import { UpdateTramitadorDto } from '../dtos/update-tramitador.dto';
import { Tramitador } from '../entities/tramitador.entity';

@ApiTags('Entities / Tramitador')
@Controller('entities/tramitador')
export class TramitadorController {
  constructor(private readonly service: TramitadorService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo tramitador' })
  @ApiResponse({ status: 201, description: 'Tramitador creado.', type: Tramitador })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() dto: CreateTramitadorDto): Promise<Tramitador> {
    return await this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los tramitadores' })
  @ApiResponse({ status: 200, description: 'Lista de tramitadores.', type: [Tramitador] })
  async findAll(): Promise<Tramitador[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar tramitador por ID' })
  @ApiResponse({ status: 200, description: 'Tramitador encontrado.', type: Tramitador })
  async findOne(@Param('id') id: string): Promise<Tramitador> {
    return await this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar tramitador' })
  @ApiResponse({ status: 200, description: 'Tramitador actualizado.', type: Tramitador })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async update(@Param('id') id: string, @Body() dto: UpdateTramitadorDto): Promise<Tramitador> {
    return await this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar tramitador' })
  @ApiResponse({ status: 200, description: 'Tramitador eliminado.', type: Tramitador })
  async delete(@Param('id') id: string): Promise<Tramitador> {
    return await this.service.delete(id);
  }
}
