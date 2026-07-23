import { Inject, Injectable, Logger } from '@nestjs/common';
import { PuntoDeVenta } from '../entities/punto-de-venta.entity';
import { CreatePuntoDeVentaDto } from './../dtos/create-punto-de-venta.dto';
import { UpdatePuntoDeVentaDto } from './../dtos/update-punto-de-venta.dto';
import {
  PuntoDeVentaRepository,
  PUNTO_DE_VENTA_REPOSITORY,
} from '../interfaces/punto-de-venta-repository.interface';

@Injectable()
export class PuntoDeVentaService {
  private readonly logger = new Logger(PuntoDeVentaService.name);

  constructor(
    @Inject(PUNTO_DE_VENTA_REPOSITORY)
    private readonly puntoDeVentaRepository: PuntoDeVentaRepository,
  ) {}

  async create(createPuntoDeVentaDto: CreatePuntoDeVentaDto): Promise<PuntoDeVenta> {
    this.logger.log(`Creando punto de venta con código ${createPuntoDeVentaDto.codigo}`);
    return await this.puntoDeVentaRepository.create(createPuntoDeVentaDto);
  }

  async findAll(): Promise<PuntoDeVenta[]> {
    this.logger.log('Obteniendo todos los puntos de venta');
    return await this.puntoDeVentaRepository.findAll();
  }

  async findOne(id: string): Promise<PuntoDeVenta> {
    this.logger.log(`Obteniendo punto de venta con ID: ${id}`);
    return await this.puntoDeVentaRepository.findOne(id);
  }

  async update(id: string, updatePuntoDeVentaDto: UpdatePuntoDeVentaDto): Promise<PuntoDeVenta> {
    this.logger.log(`Actualizando el punto de venta con ID: ${id}`);
    return await this.puntoDeVentaRepository.update(id, updatePuntoDeVentaDto);
  }

  async delete(id: string): Promise<PuntoDeVenta> {
    this.logger.log(`Eliminando punto de venta con ID: ${id}`);
    return await this.puntoDeVentaRepository.delete(id);
  }
}
