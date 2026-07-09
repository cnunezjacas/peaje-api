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
import { MunicipioService } from '../services/municipio.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateMunicipioDto, MunicipioDto } from '../dtos/municipio.dto';
import { Municipio } from '../entities/municipio.entity';

@ApiTags('Manage/Municipio')
@Controller('/manage/municipio')
export class MunicipioController {
  constructor(private municipioService: MunicipioService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateMunicipioDto): Promise<Municipio> {
    return this.municipioService.create(dto);
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() body: MunicipioDto): Promise<Municipio> {
    return this.municipioService.update(id, body);
  }

  @Delete('/:id')
  @UsePipes(new ValidationPipe())
  delete(@Param('id') id: string): Promise<Municipio> {
    return this.municipioService.delete(id);
  }

  @Get()
  @UsePipes(new ValidationPipe())
  findAll(@Query() municipioDto: MunicipioDto): Promise<Municipio[]> {
    return this.municipioService.findAll(municipioDto);
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Municipio> {
    return this.municipioService.findOne(id);
  }

  @Delete('/provincia/:id')
  deleteMany(@Param('id') id: string): Promise<number> {
    return this.municipioService.deleteMany(id);
  }
}
