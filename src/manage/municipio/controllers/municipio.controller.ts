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
import { MunicipioService } from '../services/municipio.service';
import { ApiTags } from '@nestjs/swagger';
import { 
    CreateMunicipioDto, 
    MunicipioDto 
} from '../dtos/municipio.dto';

@ApiTags('Manage/Municipio')
@Controller('/manage/municipio')
export class MunicipioController {
    constructor(private municipioService: MunicipioService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() dto: CreateMunicipioDto){
        return this.municipioService.create(dto);
    }

    @Patch('/:id')
    @UsePipes(new ValidationPipe())
    update(@Param('id') id: string, @Body() body: MunicipioDto){
        return this.municipioService.update(id, body);
    }

    @Delete('/:id')
    @UsePipes(new ValidationPipe())
    delete(@Param('id') id: string){
        return this.municipioService.delete(id);
    }

    @Get()
    @UsePipes(new ValidationPipe())
    findAll(@Query() municipioDto: MunicipioDto){
        return this.municipioService.findAll(municipioDto);
    }

    @Get('/:id')
    findOne(@Param('id') id: string){
        return this.municipioService.findOne(id);
    }
}

