import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

/* Se importa el contrato (interface) a cumplir */
import { PuntoDeVentaRepository } from '../interfaces/punto-de-venta-repository.interface';

/* Se importan los DTO */
import { CreatePuntoDeVentaDto } from '../dtos/create-punto-de-venta.dto';
import { UpdatePuntoDeVentaDto } from '../dtos/update-punto-de-venta.dto';

/* Se importa la entidad */
import { PuntoDeVenta } from '../entities/punto-de-venta.entity';

@Injectable()
export class PuntoDeVentaMongoRepository implements PuntoDeVentaRepository {
  constructor(
    @InjectModel(PuntoDeVenta.name)
    private readonly puntoDeVentaModel: Model<PuntoDeVenta>,
  ) {}

  async create(createPuntoDeVentaDto: CreatePuntoDeVentaDto): Promise<PuntoDeVenta> {
    return await new this.puntoDeVentaModel(createPuntoDeVentaDto).save();
  }

  async update(id: string, updatePuntoDeVentaDto: UpdatePuntoDeVentaDto): Promise<PuntoDeVenta> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`ID del Punto de venta no válido: ${id}`);
    }

    const puntoDeVentaActualizado = await this.puntoDeVentaModel.findByIdAndUpdate(
      id,
      updatePuntoDeVentaDto,
      { new: true },
    );

    if (!puntoDeVentaActualizado) {
      throw new NotFoundException(`Punto de venta con ID ${id} no encontrado`);
    }

    return puntoDeVentaActualizado;
  }

  async delete(id: string): Promise<PuntoDeVenta> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`ID del Punto de venta no válido: ${id}`);
    }

    const puntoDeVentaEliminado = await this.puntoDeVentaModel.findByIdAndDelete(id);

    if (!puntoDeVentaEliminado) {
      throw new NotFoundException(`Punto de venta con ID ${id} no encontrado`);
    }

    return puntoDeVentaEliminado;
  }

  async findAll(): Promise<PuntoDeVenta[]> {
    return await this.puntoDeVentaModel.find().exec();
  }

  async findOne(id: string): Promise<PuntoDeVenta> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`ID del Punto de venta no válido: ${id}`);
    }

    const puntoDeVenta = await this.puntoDeVentaModel.findById(id);

    if (!puntoDeVenta) {
      throw new NotFoundException(`Punto de venta con ID ${id} no encontrado`);
    }

    return puntoDeVenta;
  }
}
