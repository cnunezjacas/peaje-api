import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
    Injectable,
    NotFoundException
} from '@nestjs/common';
import {
    CreateComprobanteDto,
    ComprobanteDto
} from '../dtos/comprobante.dto';
import { ComprobanteRepository } from '../interfaces/comprobante-repository.interface';
import { Comprobante } from '../entities/comprobante.entity';

@Injectable()
export class ComprobanteMongoRespository implements ComprobanteRepository {
    constructor(
        @InjectModel(Comprobante.name)
        private readonly comprobanteModel: Model<Comprobante>
    ) { }

    async create(createComprobanteDto: CreateComprobanteDto): Promise<Comprobante> {
        const comprobante = await new this.comprobanteModel(createComprobanteDto).save();
        return comprobante;
    }

    async update(id: string, comprobanteDto: ComprobanteDto): Promise<Comprobante> {
        const isValid = Types.ObjectId.isValid(id);
        if (!isValid) throw new NotFoundException('Id Comprobante no válido');
        const comprobante = await this.comprobanteModel.findByIdAndUpdate(id, comprobanteDto, { new: true }).exec();
        if (!comprobante) throw new NotFoundException('Comprobante not found');
        return <Comprobante>(comprobante);
    }

     async delete(id: string): Promise<Comprobante> {
         const isValid = Types.ObjectId.isValid(id);
         if (!isValid) throw new NotFoundException('Id Comprobante no válido');
         const comprobante = await this.comprobanteModel.findByIdAndDelete(id);
         if (!comprobante) throw new NotFoundException('Comprobante not found');
         return comprobante;
     }
 
    async findAll(comprobanteDto: ComprobanteDto): Promise<Comprobante[]> {
        let comprobantes: Comprobante[] = new Array<Comprobante>;
        let result = await this.comprobanteModel.find(comprobanteDto).exec();
        result.forEach(comprobante => {
            comprobantes.push(comprobante);
        });
        return comprobantes;
    }
 
     async findOne(id: string): Promise<Comprobante> {
         const isValid = Types.ObjectId.isValid(id);
         if (!isValid) throw new NotFoundException('Id Comprobante no válido');
         const comprobante = await this.comprobanteModel.findById(id);
         if (!comprobante) throw new NotFoundException('Comprobante not found');
         return comprobante;
     }

}
