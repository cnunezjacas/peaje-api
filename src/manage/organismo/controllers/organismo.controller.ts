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
import { OrganismoService } from '../services/organismo.service';
import { ApiTags } from '@nestjs/swagger';
import { 
    CreateOrganismoDto, 
    OrganismoDto 
} from '../dtos/organismo.dto';
import { Organismo } from '../entities/organismo.entity';

@ApiTags('Manage/Organismo')
@Controller('/manage/organismo')
export class OrganismoController {
    constructor(private readonly organismoService: OrganismoService) { }
    
        @Post()
        @UsePipes(new ValidationPipe())
        create(@Body() dto: CreateOrganismoDto): Promise<Organismo>{
            return this.organismoService.create(dto);
        }
    
        @Patch('/:id')
        @UsePipes(new ValidationPipe())
        update(@Param('id') id: string, @Body() body: OrganismoDto): Promise<Organismo>{
            return this.organismoService.update(id, body);
        }
    
        @Delete('/:id')
        @UsePipes(new ValidationPipe())
        delete(@Param('id') id: string): Promise<Organismo>{
            return this.organismoService.delete(id);
        }
    
        @Get()
        @UsePipes(new ValidationPipe())
        findAll(@Query() organismoDto: OrganismoDto): Promise<Organismo[]>{
            return this.organismoService.findAll(organismoDto);
        }
    
        @Get('/:id')
        findOne(@Param('id') id: string): Promise<Organismo>{
            return this.organismoService.findOne(id);
        }
}
