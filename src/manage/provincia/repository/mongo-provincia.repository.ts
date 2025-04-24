import { Types } from 'mongoose';
import { CreateProvinciaDto } from "../dtos/create-provincia.dto";
import { ProvinciaRepository } from "../interfaces/provincia-repository.interface";
import {
    ProvinciaDocument,
    ProvinciaModel
} from "../schemas/provincia.schema";
import { Provincia } from '../entities/provincia.entity';
import {
    Injectable,
    NotFoundException
} from "@nestjs/common";
import { InjectModel, MongooseModule } from "@nestjs/mongoose";
import { UpdateProvinciaDto } from "../dtos/update-provincia.dto";
import { GetProvinciasFilterDto } from '../dtos/get-provincias-filter.dto';

@Injectable()
export class MongoProvinciaRepository implements ProvinciaRepository {

    constructor(
        @InjectModel(Provincia.name)
        private readonly provinciaModel: ProvinciaModel
    ) { }

    async create(createProvinciaDto: CreateProvinciaDto): Promise<Provincia> {
        const provincia = await new this.provinciaModel(createProvinciaDto).save();
        return this.mapRawProvinciaToProvincia(provincia);
    }

    async update(id: string, updateProvinciaDto: UpdateProvinciaDto): Promise<Provincia> {
        const isValid = Types.ObjectId.isValid(id);
        if (!isValid) throw new NotFoundException('Id Provincia no válido');
        const provincia = await this.provinciaModel.findByIdAndUpdate(id, updateProvinciaDto, { new: true });
        if (!provincia) throw new NotFoundException('Provincia not found');
        return this.mapRawProvinciaToProvincia(<ProvinciaDocument>(provincia));
    }

    async delete(id: string): Promise<Provincia> {
        const isValid = Types.ObjectId.isValid(id);
        if (!isValid) throw new NotFoundException('Id Provincia no válido');
        const provincia = await this.provinciaModel.findByIdAndDelete(id);
        if (!provincia) throw new NotFoundException('Provincia not found');
        return this.mapRawProvinciaToProvincia(<ProvinciaDocument>(provincia));
    }

    async findAll(getProvinciaFilterDto: GetProvinciasFilterDto): Promise<Provincia[]> {
        const { codigo, nombre } = getProvinciaFilterDto;
        let provincias: Provincia[] = new Array<Provincia>;
        let query = this.provinciaModel.find();
        if (codigo) query.where('codigo', codigo);
        if (nombre) query.where('nombre', nombre);
        const result = await query.exec();
        result.forEach(prov => {
            provincias.push(this.mapRawProvinciaToProvincia(<ProvinciaDocument>(prov)));
        });
        return provincias;
    }

    async findOne(id: string): Promise<Provincia> {
        const isValid = Types.ObjectId.isValid(id);
        if (!isValid) throw new NotFoundException('Id Provincia no válido');
        const provincia = await this.provinciaModel.findById(id);
        if (!provincia) throw new NotFoundException('Provincia not found');
        return this.mapRawProvinciaToProvincia(<ProvinciaDocument>(provincia));
    }

    mapRawProvinciaToProvincia(rawProvincia: ProvinciaDocument): Provincia {
        const provincia = new Provincia();
        provincia.id = rawProvincia.id;
        provincia.codigo = rawProvincia.codigo;
        provincia.nombre = rawProvincia.nombre;
        return provincia;
    }
}