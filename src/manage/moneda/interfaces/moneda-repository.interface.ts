import { 
    CreateMonedaDto,
    MonedaDto
} from "../dtos/moneda.dto";
import { Moneda } from "../entities/moneda.entity";

export const MONEDA_REPOSITORY = 'MonedaRepository';

export interface MonedaRepository {
    create(createDto: CreateMonedaDto): Promise<Moneda>;
    
    update(id: string, monedaDto: MonedaDto): Promise<Moneda>;

    delete(id: string): Promise<Moneda>;

    findAll(monedaDto: MonedaDto): Promise<Moneda[]>;

    findOne(id: string): Promise<Moneda>;
} 