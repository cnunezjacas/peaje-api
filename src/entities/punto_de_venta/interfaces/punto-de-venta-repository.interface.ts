import { CreatePuntoDeVentaDto } from '../dtos/create-punto-de-venta.dto';

import { UpdatePuntoDeVentaDto } from '../dtos/update-punto-de-venta.dto';

import { PuntoDeVenta } from '../entities/punto-de-venta.entity';

export const PUNTO_DE_VENTA_REPOSITORY = 'PuntoDeVentaRepository';

export interface PuntoDeVentaRepository {
  create(createPuntoDeVentaDto: CreatePuntoDeVentaDto): Promise<PuntoDeVenta>;

  update(id: string, updatePuntoDeVentaDto: UpdatePuntoDeVentaDto): Promise<PuntoDeVenta>;

  delete(id: string): Promise<PuntoDeVenta>;

  findAll(): Promise<PuntoDeVenta[]>;

  findOne(id: string): Promise<PuntoDeVenta>;
}
