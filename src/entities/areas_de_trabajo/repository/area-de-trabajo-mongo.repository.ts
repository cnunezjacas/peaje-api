import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { AreaDeTrabajoRepository } from '../interfaces/area-de-trabajo-repository.interface';
import { AreaDeTrabajo } from '../entities/area-de-trabajo.entity';
import { CreateAreaDeTrabajoDto } from '../dtos/create-area-de-trabajo.dto';
import { UpdateAreaDeTrabajoDto } from '../dtos/update-area-de-trabajo.dto';

@Injectable()
export class AreaDeTrabajoMongoRepository implements AreaDeTrabajoRepository {
  constructor(
    // 1. Inyectamos el modelo de Mongoose usando el nombre de la clase Entity
    @InjectModel(AreaDeTrabajo.name)
    private readonly areaDeTrabajoModel: Model<AreaDeTrabajo>,
  ) {}

  // 2. Crear un nuevo registro
  async create(createAreaDeTrabajoDto: CreateAreaDeTrabajoDto): Promise<AreaDeTrabajo> {
    return await new this.areaDeTrabajoModel(createAreaDeTrabajoDto).save();
  }

  // 3. Actualizar un registro por su ID
  async update(id: string, updateAreaDeTrabajoDto: UpdateAreaDeTrabajoDto): Promise<AreaDeTrabajo> {
    // Validamos que el ID tenga formato de ObjectId de MongoDB
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`ID de Área de Trabajo no válido: ${id}`);
    }

    // { new: true } es crucial: devuelve el documento YA actualizado, no el anterior
    const areaActualizada = await this.areaDeTrabajoModel.findByIdAndUpdate(
      id,
      updateAreaDeTrabajoDto,
      { new: true },
    );

    if (!areaActualizada) {
      throw new NotFoundException(`Área de Trabajo con ID ${id} no encontrada`);
    }

    return areaActualizada;
  }

  // 4. Eliminar un registro por su ID
  async delete(id: string): Promise<AreaDeTrabajo> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`ID de Área de Trabajo no válido: ${id}`);
    }

    const areaEliminada = await this.areaDeTrabajoModel.findByIdAndDelete(id);

    if (!areaEliminada) {
      throw new NotFoundException(`Área de Trabajo con ID ${id} no encontrada`);
    }

    return areaEliminada;
  }

  // 5. Obtener todos los registros
  async findAll(): Promise<AreaDeTrabajo[]> {
    // .exec() convierte la consulta de Mongoose en una Promesa real de JavaScript
    return await this.areaDeTrabajoModel.find().exec();
  }

  // 6. Obtener un solo registro por su ID
  async findOne(id: string): Promise<AreaDeTrabajo> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`ID de Área de Trabajo no válido: ${id}`);
    }

    const area = await this.areaDeTrabajoModel.findById(id);

    if (!area) {
      throw new NotFoundException(`Área de Trabajo con ID ${id} no encontrada`);
    }

    return area;
  }
}
