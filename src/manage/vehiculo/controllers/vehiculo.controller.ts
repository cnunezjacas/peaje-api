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
import { VehiculoService } from '../services/vehiculo.service';
import { ApiTags } from '@nestjs/swagger';
import { 
    CreateVehiculoDto, 
    VehiculoDto 
} from '../dtos/vehiculo.dto';
import { Vehiculo } from '../entities/vehiculo.entity';

@ApiTags('Manage/Vehiculo')
@Controller('/manage/vehiculo')
export class VehiculoController {
    constructor(private readonly vehiculoService: VehiculoService) { }
    
        @Post()
        @UsePipes(new ValidationPipe())
        create(@Body() dto: CreateVehiculoDto): Promise<Vehiculo> {
            return this.vehiculoService.create(dto);
        }
    
        @Patch('/:id')
        @UsePipes(new ValidationPipe())
        update(@Param('id') id: string, @Body() body: VehiculoDto): Promise<Vehiculo>{
            return this.vehiculoService.update(id, body);
        }
    
        @Delete('/:id')
        @UsePipes(new ValidationPipe())
        delete(@Param('id') id: string): Promise<Vehiculo>{
            return this.vehiculoService.delete(id);
        }
    
        @Get()
        @UsePipes(new ValidationPipe())
        findAll(@Query() vehiculoDto: VehiculoDto): Promise<Vehiculo[]>{
            return this.vehiculoService.findAll(vehiculoDto);
        }
    
        @Get('/:id')
        findOne(@Param('id') id: string): Promise<Vehiculo>{
            return this.vehiculoService.findOne(id);
        }
}

