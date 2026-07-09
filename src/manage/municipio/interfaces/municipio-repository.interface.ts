import { CreateMunicipioDto, MunicipioDto } from '../dtos/municipio.dto';
import { Municipio } from '../entities/municipio.entity';

export const MUNICIPIO_REPOSITORY = 'MunicipioRepository';

export interface MunicipioRepository {
  create(createMunicipioDto: CreateMunicipioDto): Promise<Municipio>;

  update(id: string, municipioDto: MunicipioDto): Promise<Municipio>;

  delete(id: string): Promise<Municipio>;

  findAll(municipioDto: MunicipioDto): Promise<Municipio[]>;

  findOne(id: string): Promise<Municipio>;

  deleteMany(idProvincia: string): Promise<number>;
}
