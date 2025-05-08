import { 
    Inject, 
    Injectable 
} from '@nestjs/common';
import {
    VEHICULO_REPOSITORY,
    VehiculoRepository
} from '../interfaces/vehiculo-repository.interface';
import { Vehiculo } from '../entities/vehiculo.entity';
import {
    CreateVehiculoDto,
    VehiculoDto
} from '../dtos/vehiculo.dto';

@Injectable()
export class VehiculoService {
    constructor(
        @Inject(VEHICULO_REPOSITORY)
        private readonly vehiculoRespository: VehiculoRepository
    ) { }

    async create(createVehiculoDto: CreateVehiculoDto): Promise<Vehiculo> {
        //TODO validaci'on
        // try{
        return await this.vehiculoRespository.create(createVehiculoDto);
        /*} catch(error){
            if(error.name === 'ValidationError') throw new Error('El moneda ya existe.');
            throw new Error('Error al crear el moneda');
        }*/

    }

    async update(id: string, vehiculoDto: VehiculoDto): Promise<Vehiculo> {
        return await this.vehiculoRespository.update(id, vehiculoDto);
    }

    async delete(id: string): Promise<Vehiculo> {
        return await this.vehiculoRespository.delete(id);
    }

    async findAll(vehiculoDto: VehiculoDto): Promise<Vehiculo[]> {
        return await this.vehiculoRespository.findAll(vehiculoDto);
    }

    async findOne(id: string): Promise<Vehiculo> {
        return await this.vehiculoRespository.findOne(id);
    }
}

