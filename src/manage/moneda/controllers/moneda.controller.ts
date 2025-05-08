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
import { MonedaService } from '../services/moneda.service';
import { ApiTags } from '@nestjs/swagger';
import { 
    CreateMonedaDto, 
    MonedaDto 
} from '../dtos/moneda.dto';
import { Moneda } from '../entities/moneda.entity';

@ApiTags('Manage/Moneda')
@Controller('/manage/moneda')
export class MonedaController {
    constructor(private readonly monedaService: MonedaService) { }
    
        @Post()
        @UsePipes(new ValidationPipe())
        create(@Body() dto: CreateMonedaDto): Promise<Moneda> {
            return this.monedaService.create(dto);
        }
    
        @Patch('/:id')
        @UsePipes(new ValidationPipe())
        update(@Param('id') id: string, @Body() body: MonedaDto): Promise<Moneda>{
            return this.monedaService.update(id, body);
        }
    
        @Delete('/:id')
        @UsePipes(new ValidationPipe())
        delete(@Param('id') id: string): Promise<Moneda>{
            return this.monedaService.delete(id);
        }
    
        @Get()
        @UsePipes(new ValidationPipe())
        findAll(@Query() monedaDto: MonedaDto): Promise<Moneda[]>{
            return this.monedaService.findAll(monedaDto);
        }
    
        @Get('/:id')
        findOne(@Param('id') id: string): Promise<Moneda>{
            return this.monedaService.findOne(id);
        }
}
