import { 
    Inject, 
    Injectable, 
    Logger 
} from '@nestjs/common';
import { MUNICIPIO_REPOSITORY } from '../interfaces/municipio-repository.interface';
import { Municipio } from '../entities/municipio.entity';
import { 
    CreateMunicipioDto, 
    MunicipioDto 
} from '../dtos/municipio.dto';

@Injectable()
export class MunicipioService {
    
    private readonly logger = new Logger(MunicipioService.name);

    constructor(
        @Inject(MUNICIPIO_REPOSITORY)
        private readonly municipioRepository){}

    async create(createMunicipioDto: CreateMunicipioDto): Promise<Municipio>{
        return await this.municipioRepository.create(createMunicipioDto);
    }

    async update(id: string, municipioDto: MunicipioDto): Promise<Municipio>{
        return await this.municipioRepository.update(id, municipioDto);
    }

    async delete(id: string): Promise<Municipio>{
        return await this.municipioRepository.delete(id);
    }

    async findAll(municipioDto: MunicipioDto): Promise<Municipio[]>{
        return await this.municipioRepository.findAll(municipioDto);
    }

    async findOne(id: string): Promise<Municipio>{
        return await this.municipioRepository.findOne(id);
    }

    async deleteMany(idProvincia: string): Promise<number>{
        return await this.municipioRepository.deleteMany(idProvincia);
    }
}
