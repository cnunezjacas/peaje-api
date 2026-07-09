import { CreateOrganismoDto, OrganismoDto } from '../dtos/organismo.dto';
import { Organismo } from '../entities/organismo.entity';

export const ORGANISMO_REPOSITORY = 'OrganismoRepository';

export interface OrganismoRepository {
  create(createOrganismoDto: CreateOrganismoDto): Promise<Organismo>;

  update(id: string, organismoDto: OrganismoDto): Promise<Organismo>;

  delete(id: string): Promise<Organismo>;

  findAll(organismoDto: OrganismoDto): Promise<Organismo[]>;

  findOne(id: string): Promise<Organismo>;
}
