import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EstacionesService } from '../services/estaciones.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateEstacionesDto, EstacionesDto } from '../dtos/estaciones.dto';
import { Estaciones } from '../entities/estaciones.entity';

@ApiTags('Entities/Estaciones')
@Controller('/entities/estaciones')
export class EstacionesController {
  constructor(private readonly estacionesService: EstacionesService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateEstacionesDto): Promise<Estaciones> {
    return this.estacionesService.create(dto);
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() body: EstacionesDto): Promise<Estaciones> {
    return this.estacionesService.update(id, body);
  }

  @Delete('/:id')
  @UsePipes(new ValidationPipe())
  delete(@Param('id') id: string): Promise<Estaciones> {
    return this.estacionesService.delete(id);
  }

  @Get()
  @UsePipes(new ValidationPipe())
  findAll(): Promise<Estaciones[]> {
    return this.estacionesService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Estaciones> {
    return this.estacionesService.findOne(id);
  }
}
