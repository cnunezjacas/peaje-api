import { 
    Inject, 
    Injectable, 
    Logger 
} from '@nestjs/common';
import { PROVINCIA_REPOSITORY, ProvinciaRepository } from '../interfaces/provincia-repository.interface';
import { Provincia } from '../entities/provincia.entity';
import { CreateProvinciaDto } from '../dtos/create-provincia.dto';
import { UpdateProvinciaDto } from '../dtos/update-provincia.dto';
import { GetProvinciasFilterDto } from '../dtos/get-provincias-filter.dto';

@Injectable()
export class ProvinciaService {
    
    private readonly logger = new Logger(ProvinciaService.name);

    constructor(
        @Inject(PROVINCIA_REPOSITORY)
        private readonly provinciaRepository: ProvinciaRepository){}

    async create(createProvinciaDto: CreateProvinciaDto): Promise<Provincia>{
        
        this.logger.log('Creando provincia desde ProvinciaService');

        return await this.provinciaRepository.create(createProvinciaDto);
    }

    async update(id: string, updateProvinciaDto: UpdateProvinciaDto): Promise<Provincia>{
        this.logger.log('Actualizando provincia desde ProvinciaService');
        return await this.provinciaRepository.update(id, updateProvinciaDto);
    }

    async delete(id: string): Promise<Provincia>{
        this.logger.log('Eliminando provincia desde ProvinciaService');
        return await this.provinciaRepository.delete(id);
    }

    async findAll(getProvinciaFilterDto: GetProvinciasFilterDto): Promise<Provincia[]>{
        return await this.provinciaRepository.findAll(getProvinciaFilterDto);
    }

    async findOne(id: string): Promise<Provincia>{
        return await this.provinciaRepository.findOne(id);
    }
}
