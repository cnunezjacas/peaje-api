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
import { BancoService } from '../services/banco.service';
import { ApiTags } from '@nestjs/swagger';
import { 
    CreateBancoDto, 
    BancoDto 
} from '../dtos/banco.dto';
import { Banco } from '../entities/banco.entity';

@ApiTags('Manage/Banco')
@Controller('/manage/banco')
export class BancoController {
    constructor(private readonly bancoService: BancoService) { }
    
        @Post()
        @UsePipes(new ValidationPipe())
        create(@Body() dto: CreateBancoDto): Promise<Banco>{
            return this.bancoService.create(dto);
        }
    
        @Patch('/:id')
        @UsePipes(new ValidationPipe())
        update(@Param('id') id: string, @Body() body: BancoDto): Promise<Banco>{
            return this.bancoService.update(id, body);
        }
    
        @Delete('/:id')
        @UsePipes(new ValidationPipe())
        delete(@Param('id') id: string): Promise<Banco>{
            return this.bancoService.delete(id);
        }
    
        @Get()
        @UsePipes(new ValidationPipe())
        findAll(@Query() bancoDto: BancoDto): Promise<Banco[]>{
            return this.bancoService.findAll(bancoDto);
        }
    
        @Get('/:id')
        findOne(@Param('id') id: string): Promise<Banco>{
            return this.bancoService.findOne(id);
        }
}
