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

import { CreatePuntoDeVentaDto } from './../dtos/create-punto-de-venta.dto';
import { UpdatePuntoDeVentaDto } from './../dtos/update-punto-de-venta.dto';
import { PuntoDeVentaService } from './../services/punto-de-venta.service';

import { PuntoDeVenta } from '../entities/punto-de-venta.entity';

@ApiTags('Entities / Puntos de venta')
@Controller('entities/punto-de-venta')
export class PuntoDeVentaController {
  constructor(private readonly puntoDeVentaService: PuntoDeVentaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo punto de venta' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  @ApiResponse({
    status: 201,
    description: 'Punto de venta creado exitosamente.',
    type: PuntoDeVenta,
  })
  async create(@Body() createPuntoDeVentaDto: CreatePuntoDeVentaDto): Promise<PuntoDeVenta> {
    return this.puntoDeVentaService.create(createPuntoDeVentaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los puntos de venta' })
  @ApiResponse({ status: 200, description: 'Lista de puntos de venta.', type: [PuntoDeVenta] })
  async findAll(): Promise<PuntoDeVenta[]> {
    return this.puntoDeVentaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un punto de venta por su ID' })
  @ApiResponse({ status: 200, description: 'Punto de venta encontrado.', type: PuntoDeVenta })
  findOne(@Param('id') id: string): Promise<PuntoDeVenta> {
    return this.puntoDeVentaService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un punto de venta por su ID' })
  @ApiResponse({ status: 200, description: 'Punto de venta actualizado.', type: PuntoDeVenta })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async update(
    @Param('id') id: string,
    @Body() updatePuntoDeVentaDto: UpdatePuntoDeVentaDto,
  ): Promise<PuntoDeVenta> {
    return await this.puntoDeVentaService.update(id, updatePuntoDeVentaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un punto de venta por su ID' })
  @ApiResponse({ status: 200, description: 'Punto de venta eliminado.', type: PuntoDeVenta })
  async delete(@Param('id') id: string): Promise<PuntoDeVenta> {
    return await this.puntoDeVentaService.delete(id);
  }
}
