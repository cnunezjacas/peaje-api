import { 
    Model, 
    Types 
} from 'mongoose';
import {
    CreateMunicipioDto,
    MunicipioDto
} from "../dtos/municipio.dto";
import { MunicipioRepository } from "../interfaces/municipio-repository.interface";
import { Municipio } from "../entities/municipio.entity";
import {
    Injectable,
    NotFoundException
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class MongoMunicipioRepository implements MunicipioRepository {

    constructor(
        @InjectModel(Municipio.name)
        private readonly municipioModel: Model<Municipio>
    ) { }

    async create(createMunicipioDto: CreateMunicipioDto): Promise<Municipio> {
        const municipio = await new this.municipioModel(createMunicipioDto).save();
        return municipio;
    }

    async update(id: string, municipioDto: MunicipioDto): Promise<Municipio> {
        const isValid = Types.ObjectId.isValid(id);
        if (!isValid) throw new NotFoundException('Id Municipio no válido');
        const municipio = await this.municipioModel.findByIdAndUpdate(id, municipioDto, { new: true }).exec();
        if (!municipio) throw new NotFoundException('Municipio not found');
        return <Municipio>(municipio);
    }

    async delete(id: string): Promise<Municipio> {
        const isValid = Types.ObjectId.isValid(id);
        if (!isValid) throw new NotFoundException('Id Municipio no válido');
        const municipio = await this.municipioModel.findByIdAndDelete(id);
        if (!municipio) throw new NotFoundException('Municipio not found');
        return municipio;
    }

    async findAll(municipioDto: MunicipioDto): Promise<Municipio[]> {
        const { codigo, nombre, provincia } = municipioDto;
        let municipios: Municipio[] = new Array<Municipio>;
        let query = this.municipioModel.find();
        if (codigo) query.where('codigo', codigo);
        if (nombre) query.where('nombre', nombre);
        if (provincia) query.where('provincia', provincia);
        const result = await query.exec();
        result.forEach(mun => {
            municipios.push(mun);
        });
        return municipios;
    }

    async findOne(id: string): Promise<Municipio> {
        const isValid = Types.ObjectId.isValid(id);
        if (!isValid) throw new NotFoundException('Id Municipio no válido');
        const municipio = await this.municipioModel.findById(id);
        if (!municipio) throw new NotFoundException('Municipio not found');
        return municipio;
    }
}