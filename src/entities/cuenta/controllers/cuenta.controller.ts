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
import { CuentaService } from '../services/cuenta.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCuentaDto } from '../dtos/create-cuenta.dto';
import { UpdateCuentaDto } from '../dtos/update-cuenta.dto';
import { Cuenta } from '../entities/cuenta.entity';

@ApiTags('Entities/Cuenta')
@Controller('/entities/cuenta')
export class CuentaController {
  constructor(private readonly cuentaService: CuentaService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateCuentaDto): Promise<Cuenta> {
    return this.cuentaService.create(dto);
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() body: UpdateCuentaDto): Promise<Cuenta> {
    return this.cuentaService.update(id, body);
  }

  @Delete('/:id')
  @UsePipes(new ValidationPipe())
  delete(@Param('id') id: string): Promise<Cuenta> {
    return this.cuentaService.delete(id);
  }

  @Get()
  @UsePipes(new ValidationPipe())
  findAll(): Promise<Cuenta[]> {
    return this.cuentaService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Cuenta> {
    return this.cuentaService.findOne(id);
  }
}
