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
import { TipoCuentaService } from '../services/tipo-cuenta.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateTipoCuentaDto, TipoCuentaDto } from '../dtos/tipo-cuenta.dto';
import { TipoCuenta } from '../entities/tipo-cuenta.entity';

@ApiTags('Manage/TipoCuenta')
@Controller('/manage/tipocuenta')
export class TipoCuentaController {
  constructor(private readonly tipoCuentaService: TipoCuentaService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateTipoCuentaDto): Promise<TipoCuenta> {
    return this.tipoCuentaService.create(dto);
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() body: TipoCuentaDto): Promise<TipoCuenta> {
    return this.tipoCuentaService.update(id, body);
  }

  @Delete('/:id')
  @UsePipes(new ValidationPipe())
  delete(@Param('id') id: string): Promise<TipoCuenta> {
    return this.tipoCuentaService.delete(id);
  }

  @Get()
  @UsePipes(new ValidationPipe())
  findAll(@Query() tipoCuentaDto: TipoCuentaDto): Promise<TipoCuenta[]> {
    return this.tipoCuentaService.findAll(tipoCuentaDto);
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<TipoCuenta> {
    return this.tipoCuentaService.findOne(id);
  }
}
