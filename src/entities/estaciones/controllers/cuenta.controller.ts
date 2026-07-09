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
import { CuentaService } from '../services/cuenta.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCuentaDto, CuentaDto } from '../dtos/cuenta.dto';
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
  update(@Param('id') id: string, @Body() body: CuentaDto): Promise<Cuenta> {
    return this.cuentaService.update(id, body);
  }

  @Delete('/:id')
  @UsePipes(new ValidationPipe())
  delete(@Param('id') id: string): Promise<Cuenta> {
    return this.cuentaService.delete(id);
  }

  @Get()
  @UsePipes(new ValidationPipe())
  findAll(@Query() cuentaDto: CuentaDto): Promise<Cuenta[]> {
    return this.cuentaService.findAll(cuentaDto);
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Cuenta> {
    return this.cuentaService.findOne(id);
  }
}
