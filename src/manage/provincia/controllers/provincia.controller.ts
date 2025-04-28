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
import { ProvinciaService } from '../services/provincia.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateProvinciaDto } from '../dtos/create-provincia.dto';
import { UpdateProvinciaDto } from '../dtos/update-provincia.dto';
import { GetProvinciasFilterDto } from '../dtos/get-provincias-filter.dto';

@ApiTags('Manage/Provincia')
@Controller('/manage/provincia')
export class ProvinciaController {
    constructor(private provinciaService: ProvinciaService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() dto: CreateProvinciaDto){
        return this.provinciaService.create(dto);
    }

    @Patch('/:id')
    @UsePipes(new ValidationPipe())
    update(@Param('id') id: string, @Body() body: UpdateProvinciaDto){
        return this.provinciaService.update(id, body);
    }

    @Delete('/:id')
    @UsePipes(new ValidationPipe())
    delete(@Param('id') id: string){
        return this.provinciaService.delete(id);
    }

    @Get()
    @UsePipes(new ValidationPipe())
    findAll(@Query() getProvinciasFilterDto: GetProvinciasFilterDto){
        return this.provinciaService.findAll(getProvinciasFilterDto);
    }

    @Get('/:id')
    findOne(@Param('id') id: string){
        return this.provinciaService.findOne(id);
    }
}
