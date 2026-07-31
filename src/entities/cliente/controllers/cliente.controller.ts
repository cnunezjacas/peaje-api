import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ClienteService } from '../services/cliente.service';
import { CreateClienteDto } from '../dtos/create-cliente.dto';
import { UpdateClienteDto } from '../dtos/update-cliente.dto';
import { Cliente } from '../entities/cliente.entity';

@ApiTags('Entities / Cliente')
@Controller('entities/cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  /* ================================================================================== */

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo cliente' })
  @ApiResponse({ status: 201, description: 'Cliente creado exitosamente.', type: Cliente })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() dto: CreateClienteDto): Promise<Cliente> {
    return await this.clienteService.create(dto);
  }

  /* ================================================================================== */

  @Get()
  @ApiOperation({ summary: 'Obtener todos los clientes' })
  @ApiResponse({ status: 200, description: 'Lista de clientes.', type: [Cliente] })
  async findAll(): Promise<Cliente[]> {
    return await this.clienteService.findAll();
  }

  /* ================================================================================== */

  @Get(':id')
  @ApiOperation({ summary: 'Buscar cliente por su ID' })
  @ApiResponse({ status: 200, description: 'Cliente encontrado.', type: Cliente })
  @ApiResponse({ status: 404, description: 'Cliente no encontrado.' })
  async findOne(@Param('id') id: string): Promise<Cliente> {
    return await this.clienteService.findOne(id);
  }

  /* ================================================================================== */

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar cliente por su ID' })
  @ApiResponse({ status: 200, description: 'Cliente actualizado.', type: Cliente })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async update(@Param('id') id: string, @Body() dto: UpdateClienteDto): Promise<Cliente> {
    return await this.clienteService.update(id, dto);
  }

  /* ================================================================================== */

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar cliente por su ID' })
  @ApiResponse({ status: 200, description: 'Cliente eliminado.', type: Cliente })
  async delete(@Param('id') id: string): Promise<Cliente> {
    return await this.clienteService.delete(id);
  }

  /* ================================================================================== */
}