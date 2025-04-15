import { Body, Controller, Post } from '@nestjs/common';
import { ProvinciaService } from '../services/provincia.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateProvinciaDto } from '../dtos/create-provincia.dto';

@ApiTags('Manage/Provincia')
@Controller('/manage/provincia')
export class ProvinciaController {
    constructor(private provinciaService: ProvinciaService) { }

    @Post()
    create(@Body() dto: CreateProvinciaDto) {
        return this.provinciaService.create(dto);
    }
}
