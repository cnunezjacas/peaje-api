import { Inject, Injectable } from '@nestjs/common';
import {
    ORGANISMO_REPOSITORY,
    OrganismoRepository
} from '../interfaces/organismo-repository.interface';
import { Organismo } from '../entities/organismo.entity';
import {
    CreateOrganismoDto,
    OrganismoDto
} from '../dtos/organismo.dto';

@Injectable()
export class OrganismoService {
    constructor(
        @Inject(ORGANISMO_REPOSITORY)
        private readonly organismoRepository: OrganismoRepository
    ) { }

    async create(createOrganismoDto: CreateOrganismoDto): Promise<Organismo> {
        // try{
        return await this.organismoRepository.create(createOrganismoDto);
        /*} catch(error){
            if(error.name === 'ValidationError') throw new Error('El organismo ya existe.');
            throw new Error('Error al crear el organismo');
        }*/

    }

    async update(id: string, organismoDto: OrganismoDto): Promise<Organismo> {
        return await this.organismoRepository.update(id, organismoDto);
    }

    async delete(id: string): Promise<Organismo> {
        return await this.organismoRepository.delete(id);
    }

    async findAll(organismoDto: OrganismoDto): Promise<Organismo[]> {
        return await this.organismoRepository.findAll(organismoDto);
    }

    async findOne(id: string): Promise<Organismo> {
        return await this.organismoRepository.findOne(id);
    }

}
