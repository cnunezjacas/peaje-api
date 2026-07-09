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
import { FormasDePagoService } from '../services/formas-pago.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateFormasDePagoDto, FormasDePagoDto } from '../dtos/formas-pago.dto';
import { FormasDePago } from '../entities/formas-pago.entity';

@ApiTags('Manage/Formas de Pago')
@Controller('/manage/formasdepago')
export class FormasDePagoController {
  constructor(private readonly formasDePagoService: FormasDePagoService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateFormasDePagoDto): Promise<FormasDePago> {
    return this.formasDePagoService.create(dto);
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() body: FormasDePagoDto): Promise<FormasDePago> {
    return this.formasDePagoService.update(id, body);
  }

  @Delete('/:id')
  @UsePipes(new ValidationPipe())
  delete(@Param('id') id: string): Promise<FormasDePago> {
    return this.formasDePagoService.delete(id);
  }

  @Get()
  @UsePipes(new ValidationPipe())
  findAll(@Query() formasDePagoDto: FormasDePagoDto): Promise<FormasDePago[]> {
    return this.formasDePagoService.findAll(formasDePagoDto);
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<FormasDePago> {
    return this.formasDePagoService.findOne(id);
  }
}
