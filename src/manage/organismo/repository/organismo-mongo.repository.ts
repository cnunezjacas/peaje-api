import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
    Injectable,
    NotFoundException
} from '@nestjs/common';
import {
    CreateOrganismoDto,
    OrganismoDto
} from '../dtos/organismo.dto';
import { OrganismoRepository } from '../interfaces/organismo-repository.interface';
import { Organismo } from '../entities/organismo.entity';

@Injectable()
export class OrganismoMongoRespository implements OrganismoRepository {
    constructor(
        @InjectModel(Organismo.name)
        private readonly organismoModel: Model<Organismo>
    ) { }

    async create(createOrganismoDto: CreateOrganismoDto): Promise<Organismo> {
        const organismo = await new this.organismoModel(createOrganismoDto).save();
        return organismo;
    }

    async update(id: string, organismoDto: OrganismoDto): Promise<Organismo> {
        const isValid = Types.ObjectId.isValid(id);
        if (!isValid) throw new NotFoundException('Id Organismo no válido');
        const orga = await this.organismoModel.findByIdAndUpdate(id, organismoDto, { new: true }).exec();
        if (!orga) throw new NotFoundException('Organismo not found');
        return <Organismo>(orga);
    }

     async delete(id: string): Promise<Organismo> {
         const isValid = Types.ObjectId.isValid(id);
         if (!isValid) throw new NotFoundException('Id Organismo no válido');
         const orga = await this.organismoModel.findByIdAndDelete(id);
         if (!orga) throw new NotFoundException('Organismo not found');
         return orga;
     }
 
    async findAll(organismoDto: OrganismoDto): Promise<Organismo[]> {
        const { nombre, siglas } = organismoDto;
        let organismos: Organismo[] = new Array<Organismo>;
        let query = this.organismoModel.find();
        if (nombre) query.where('nombre', nombre);
        if (siglas) query.where('siglas', siglas);
        const result = await query.exec();
        result.forEach(orga => {
            organismos.push(orga);
        });
        return organismos;
    }
 
     async findOne(id: string): Promise<Organismo> {
         const isValid = Types.ObjectId.isValid(id);
         if (!isValid) throw new NotFoundException('Id Organismo no válido');
         const organismo = await this.organismoModel.findById(id);
         if (!organismo) throw new NotFoundException('Organismo not found');
         return organismo;
     }

}
