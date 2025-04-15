import { CreateProvinciaDto } from "../dtos/create-provincia.dto";
import { Provincia } from "../entities/provincia.entity";

export const PROVINCIA_REPOSITORY = 'ProvinciaRepository';

export interface ProvinciaRepository {
    createProvincia(provincia:CreateProvinciaDto): Promise<Provincia>;
}