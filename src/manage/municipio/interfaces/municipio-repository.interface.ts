import { CreateMunicipioDto } from '../dtos/create-municipio.dto';
import { UpdateMunicipioDto } from '../dtos/update-municipio.dto';
import { Municipio } from '../entities/municipio.entity';

export const MUNICIPIO_REPOSITORY = 'MunicipioRepository';

export interface MunicipioRepository {
  create(createMunicipioDto: CreateMunicipioDto): Promise<Municipio>;

  update(id: string, updateMunicipioDto: UpdateMunicipioDto): Promise<Municipio>;

  delete(id: string): Promise<Municipio>;

  findAll(): Promise<Municipio[]>;

  findOne(id: string): Promise<Municipio>;

  /* deleteMany(idProvincia: string): Promise<number>; */
}
