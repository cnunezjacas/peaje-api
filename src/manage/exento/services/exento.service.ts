import { 
    Inject, 
    Injectable 
} from '@nestjs/common';
import {
    EXENTO_REPOSITORY,
    ExentoRepository
} from '../interfaces/exento-repository.interface';
import { Exento } from '../entities/exento.entity';
import {
    CreateExentoDto,
    ExentoDto
} from '../dtos/exento.dto';

@Injectable()
export class ExentoService {
    constructor(
        @Inject(EXENTO_REPOSITORY)
        private readonly exentoRepository: ExentoRepository
    ) { }

    async create(createExentoDto: CreateExentoDto): Promise<Exento> {
        //TODO validaci'on
        // try{
        return await this.exentoRepository.create(createExentoDto);
        /*} catch(error){
            if(error.name === 'ValidationError') throw new Error('El moneda ya existe.');
            throw new Error('Error al crear el moneda');
        }*/

    }

    async update(id: string, exentoDto: ExentoDto): Promise<Exento> {
        return await this.exentoRepository.update(id, exentoDto);
    }

    async delete(id: string): Promise<Exento> {
        return await this.exentoRepository.delete(id);
    }

    async findAll(exentoDto: ExentoDto): Promise<Exento[]> {
        return await this.exentoRepository.findAll(exentoDto);
    }

    async findOne(id: string): Promise<Exento> {
        return await this.exentoRepository.findOne(id);
    }
}


