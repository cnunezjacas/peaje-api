import { Inject, Injectable, Logger } from '@nestjs/common';

import {
  AreaDeTrabajoRepository,
  AREA_DE_TRABAJO_REPOSITORY,
} from '../interfaces/area-de-trabajo-repository.interface';
import { AreaDeTrabajo } from '../entities/area-de-trabajo.entity';
import { CreateAreaDeTrabajoDto } from '../dtos/create-area-de-trabajo.dto';
import { UpdateAreaDeTrabajoDto } from '../dtos/update-area-de-trabajo.dto';

@Injectable()
export class AreaDeTrabajoService {
  // 1. Logger profesional para registrar actividades
  private readonly logger = new Logger(AreaDeTrabajoService.name);

  constructor(
    // 2. Inyectamos el Repository usando el TOKEN, no la clase concreta
    @Inject(AREA_DE_TRABAJO_REPOSITORY)
    private readonly areaDeTrabajoRepository: AreaDeTrabajoRepository,
  ) {}

  // 3. Crear
  async create(createAreaDeTrabajoDto: CreateAreaDeTrabajoDto): Promise<AreaDeTrabajo> {
    this.logger.log(`Creando nueva área de trabajo: ${createAreaDeTrabajoDto.nombre}`);

    /* Aquí se puede agregar lógica de negocio antes de guardar.*/

    return await this.areaDeTrabajoRepository.create(createAreaDeTrabajoDto);
  }

  // 4. Actualizar
  async update(id: string, updateAreaDeTrabajoDto: UpdateAreaDeTrabajoDto): Promise<AreaDeTrabajo> {
    this.logger.log(`Actualizando área de trabajo con ID: ${id}`);
    return await this.areaDeTrabajoRepository.update(id, updateAreaDeTrabajoDto);
  }

  // 5. Eliminar
  async delete(id: string): Promise<AreaDeTrabajo> {
    this.logger.log(`Eliminando área de trabajo con ID: ${id}`);

    // Aquí se puede agregar lógica: "¿Tiene Tarjetas producidas? No dejar borrar".

    return await this.areaDeTrabajoRepository.delete(id);
  }

  // 6. Obtener todos
  async findAll(): Promise<AreaDeTrabajo[]> {
    this.logger.log('Obteniendo todas las áreas de trabajo');
    return await this.areaDeTrabajoRepository.findAll();
  }

  // 7. Obtener uno por ID
  async findOne(id: string): Promise<AreaDeTrabajo> {
    this.logger.log(`Buscando área de trabajo con ID: ${id}`);
    return await this.areaDeTrabajoRepository.findOne(id);
  }
}
