import { CreateProvinciaDto } from "../dtos/create-provincia.dto";
import { GetProvinciasFilterDto } from "../dtos/get-provincias-filter.dto";
import { UpdateProvinciaDto } from "../dtos/update-provincia.dto";
import { Provincia } from "../entities/provincia.entity";

export const PROVINCIA_REPOSITORY = 'ProvinciaRepository';

export interface ProvinciaRepository {
    create(createProvinciaDto: CreateProvinciaDto): Promise<Provincia>;

    update(id: string, updateProvinciaDto: UpdateProvinciaDto): Promise<Provincia>;

    delete(id: string): Promise<Provincia>;
    
    findAll(getProvinciaFilterDto: GetProvinciasFilterDto): Promise<Provincia[]>;

    findOne(id: string): Promise<Provincia>;
}