import { 
    CreateExentoDto,
    ExentoDto
} from "../dtos/exento.dto";
import { Exento } from "../entities/exento.entity";

export const EXENTO_REPOSITORY = 'ExentoRepository';

export interface ExentoRepository {
    create(createExentoDto: CreateExentoDto): Promise<Exento>;
    
    update(id: string, exentoDto: ExentoDto): Promise<Exento>;

    delete(id: string): Promise<Exento>;

    findAll(exentoDto: ExentoDto): Promise<Exento[]>;

    findOne(id: string): Promise<Exento>;
} 