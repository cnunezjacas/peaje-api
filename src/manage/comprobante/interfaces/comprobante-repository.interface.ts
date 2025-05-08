import { 
    CreateComprobanteDto,
    ComprobanteDto
} from "../dtos/comprobante.dto";
import { Comprobante } from "../entities/comprobante.entity";

export const COMPROBANTE_REPOSITORY = 'ComprobanteRepository';

export interface ComprobanteRepository {
    create(createComprobanteDto: CreateComprobanteDto): Promise<Comprobante>;
    
    update(id: string, comprobanteDto: ComprobanteDto): Promise<Comprobante>;

    delete(id: string): Promise<Comprobante>;

    findAll(comprobanteDto: ComprobanteDto): Promise<Comprobante[]>;

    findOne(id: string): Promise<Comprobante>;
} 