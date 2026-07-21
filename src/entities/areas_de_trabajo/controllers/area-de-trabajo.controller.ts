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

import { AreaDeTrabajoService } from '../services/area-de-trabajo.service';
import { CreateAreaDeTrabajoDto } from '../dtos/create-area-de-trabajo.dto';
import { UpdateAreaDeTrabajoDto } from '../dtos/update-area-de-trabajo.dto';
import { AreaDeTrabajo } from '../entities/area-de-trabajo.entity';

// 1. @ApiTags agrupa este controller en la documentación de Swagger
@ApiTags('Entities / Áreas de Trabajo')
// 2. @Controller define la ruta base para todos los endpoints de esta clase
@Controller('/entities/areas_de_trabajo')
export class AreaDeTrabajoController {
  // 3. Inyectamos el Service (NestJS resuelve la dependencia automáticamente)
  constructor(private readonly areaDeTrabajoService: AreaDeTrabajoService) {}

  // 4. Crear un nuevo registro (POST)
  @Post()
  @ApiOperation({ summary: 'Crear una nueva área de trabajo' })
  @ApiResponse({
    status: 201,
    description: 'Área de trabajo creada exitosamente.',
    type: AreaDeTrabajo,
  })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() createAreaDeTrabajoDto: CreateAreaDeTrabajoDto): Promise<AreaDeTrabajo> {
    return await this.areaDeTrabajoService.create(createAreaDeTrabajoDto);
  }

  // 5. Obtener todos los registros (GET)
  @Get()
  @ApiOperation({ summary: 'Obtener todas las áreas de trabajo' })
  @ApiResponse({ status: 200, description: 'Lista de áreas de trabajo.', type: [AreaDeTrabajo] })
  async findAll(): Promise<AreaDeTrabajo[]> {
    return await this.areaDeTrabajoService.findAll();
  }

  // 6. Obtener un registro por su ID (GET)
  @Get('/:id')
  @ApiOperation({ summary: 'Obtener un área de trabajo por su ID' })
  @ApiResponse({ status: 200, description: 'Área de trabajo encontrada.', type: AreaDeTrabajo })
  @ApiResponse({ status: 404, description: 'Área de trabajo no encontrada.' })
  async findOne(@Param('id') id: string): Promise<AreaDeTrabajo> {
    return await this.areaDeTrabajoService.findOne(id);
  }

  // 7. Actualizar un registro por su ID (PATCH)
  @Patch('/:id')
  @ApiOperation({ summary: 'Actualizar un área de trabajo por su ID' })
  @ApiResponse({ status: 200, description: 'Área de trabajo actualizada.', type: AreaDeTrabajo })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async update(
    @Param('id') id: string,
    @Body() updateAreaDeTrabajoDto: UpdateAreaDeTrabajoDto,
  ): Promise<AreaDeTrabajo> {
    return await this.areaDeTrabajoService.update(id, updateAreaDeTrabajoDto);
  }

  // 8. Eliminar un registro por su ID (DELETE)
  @Delete('/:id')
  @ApiOperation({ summary: 'Eliminar un área de trabajo por su ID' })
  @ApiResponse({ status: 200, description: 'Área de trabajo eliminada.', type: AreaDeTrabajo })
  async delete(@Param('id') id: string): Promise<AreaDeTrabajo> {
    return await this.areaDeTrabajoService.delete(id);
  }
}
