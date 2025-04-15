import { 
    Inject, 
    Injectable, 
    Logger 
} from '@nestjs/common';
import { PROVINCIA_REPOSITORY } from '../interfaces/provincia-repository.interface';
import { CreateProvinciaDto } from '../dtos/create-provincia.dto';

@Injectable()
export class ProvinciaService {
    
    private readonly logger = new Logger(ProvinciaService.name);

    constructor(
        @Inject(PROVINCIA_REPOSITORY)
        private readonly provinciaRepository){}

    async create(createProvinciaDto: CreateProvinciaDto){
        
        this.logger.log('Creando provincia desde ProvinciaService');

        return await this.provinciaRepository.createProvincia(createProvinciaDto);
    }
}
/*import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Provincia } from '../schemas/provincia.schema';
import { CreateProvinciaDto } from '../dtos/create-provincia.dto';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ProvinciaService {
    
    private readonly logger = new Logger(ProvinciaService.name);

    constructor(
        @InjectModel(Provincia.name)
        private readonly provinciaModel: Model<Provincia>){}

    async create(dto: CreateProvinciaDto){
        const { codigo, nombre } = dto;
        this.logger.log('Creando provincia desde ProvinciaService');

        return await this.provinciaModel.create({
            codigo,
            nombre
        });
    }
}*/
