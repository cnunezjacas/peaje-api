import { 
    Inject, 
    Injectable 
} from '@nestjs/common';
import {
    MONEDA_REPOSITORY,
    MonedaRepository
} from '../interfaces/moneda-repository.interface';
import { Moneda } from '../entities/moneda.entity';
import {
    CreateMonedaDto,
    MonedaDto
} from '../dtos/moneda.dto';

@Injectable()
export class MonedaService {
    constructor(
        @Inject(MONEDA_REPOSITORY)
        private readonly monedaRepository: MonedaRepository
    ) { }

    async create(createMonedaDto: CreateMonedaDto): Promise<Moneda> {
        //TODO validaci'on
        // try{
        return await this.monedaRepository.create(createMonedaDto);
        /*} catch(error){
            if(error.name === 'ValidationError') throw new Error('El moneda ya existe.');
            throw new Error('Error al crear el moneda');
        }*/

    }

    async update(id: string, monedaDto: MonedaDto): Promise<Moneda> {
        return await this.monedaRepository.update(id, monedaDto);
    }

    async delete(id: string): Promise<Moneda> {
        return await this.monedaRepository.delete(id);
    }

    async findAll(monedaDto: MonedaDto): Promise<Moneda[]> {
        return await this.monedaRepository.findAll(monedaDto);
    }

    async findOne(id: string): Promise<Moneda> {
        return await this.monedaRepository.findOne(id);
    }
}
