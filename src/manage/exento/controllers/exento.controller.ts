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
    ValidationPipe 
} from '@nestjs/common';
import { ExentoService } from '../services/exento.service';
import { ApiTags } from '@nestjs/swagger';
import { 
    CreateExentoDto, 
    ExentoDto 
} from '../dtos/exento.dto';
import { Exento } from '../entities/exento.entity';

@ApiTags('Manage/Exento')
@Controller('/manage/exento')
export class ExentoController {
    constructor(private readonly exentoService: ExentoService) { }
    
        @Post()
        @UsePipes(new ValidationPipe())
        create(@Body() dto: CreateExentoDto): Promise<Exento> {
            return this.exentoService.create(dto);
        }
    
        @Patch('/:id')
        @UsePipes(new ValidationPipe())
        update(@Param('id') id: string, @Body() body: ExentoDto): Promise<Exento>{
            return this.exentoService.update(id, body);
        }
    
        @Delete('/:id')
        @UsePipes(new ValidationPipe())
        delete(@Param('id') id: string): Promise<Exento>{
            return this.exentoService.delete(id);
        }
    
        @Get()
        @UsePipes(new ValidationPipe())
        findAll(@Query() exentoDto: ExentoDto): Promise<Exento[]>{
            return this.exentoService.findAll(exentoDto);
        }
    
        @Get('/:id')
        findOne(@Param('id') id: string): Promise<Exento>{
            return this.exentoService.findOne(id);
        }
}

