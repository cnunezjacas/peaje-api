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
import { ComprobanteService } from '../services/comprobante.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateComprobanteDto, ComprobanteDto } from '../dtos/comprobante.dto';
import { Comprobante } from '../entities/comprobante.entity';

@ApiTags('Manage/Comprobante')
@Controller('/manage/comprobante')
export class ComprobanteController {
  constructor(private readonly comprobanteService: ComprobanteService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateComprobanteDto): Promise<Comprobante> {
    return this.comprobanteService.create(dto);
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() body: ComprobanteDto): Promise<Comprobante> {
    return this.comprobanteService.update(id, body);
  }

  @Delete('/:id')
  @UsePipes(new ValidationPipe())
  delete(@Param('id') id: string): Promise<Comprobante> {
    return this.comprobanteService.delete(id);
  }

  @Get()
  @UsePipes(new ValidationPipe())
  findAll(@Query() comprobanteDto: ComprobanteDto): Promise<Comprobante[]> {
    return this.comprobanteService.findAll(comprobanteDto);
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Comprobante> {
    return this.comprobanteService.findOne(id);
  }
}
