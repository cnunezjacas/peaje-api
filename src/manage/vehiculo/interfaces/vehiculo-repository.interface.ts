import { 
    CreateVehiculoDto,
    VehiculoDto
} from "../dtos/vehiculo.dto";
import { Vehiculo } from "../entities/vehiculo.entity";

export const VEHICULO_REPOSITORY = 'VehiculoRepository';

export interface VehiculoRepository {
    create(createVehiculoDto: CreateVehiculoDto): Promise<Vehiculo>;
    
    update(id: string, vehiculoDto: VehiculoDto): Promise<Vehiculo>;

    delete(id: string): Promise<Vehiculo>;

    findAll(vehiculoDto: VehiculoDto): Promise<Vehiculo[]>;

    findOne(id: string): Promise<Vehiculo>;
} 