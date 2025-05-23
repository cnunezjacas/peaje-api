import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
    Injectable,
    NotFoundException
} from '@nestjs/common';
import {
    CreateFormasDePagoDto,
    FormasDePagoDto
} from '../dtos/formas-pago.dto';
import { FormasDePagoRepository } from '../interfaces/formas-pago-repository.interface';
import { FormasDePago } from '../entities/formas-pago.entity';

@Injectable()
export class FormasDePagoMongoRespository implements FormasDePagoRepository {
    constructor(
        @InjectModel(FormasDePago.name)
        private readonly formasDePagoModel: Model<FormasDePago>
    ) { }

    async create(createFormasDePagoDto: CreateFormasDePagoDto): Promise<FormasDePago> {
        const formasDePago = await new this.formasDePagoModel(createFormasDePagoDto).save();
        return formasDePago;
    }

    async update(id: string, formasDePagoDto: FormasDePagoDto): Promise<FormasDePago> {
        const isValid = Types.ObjectId.isValid(id);
        if (!isValid) throw new NotFoundException('Id Formas de Pago no válido');
        const formasDePago = await this.formasDePagoModel.findByIdAndUpdate(id, formasDePagoDto, { new: true }).exec();
        if (!formasDePago) throw new NotFoundException('Formas de Pago not found');
        return <FormasDePago>(formasDePago);
    }

     async delete(id: string): Promise<FormasDePago> {
         const isValid = Types.ObjectId.isValid(id);
         if (!isValid) throw new NotFoundException('Id Formas de Pago no válido');
         const formasDePago = await this.formasDePagoModel.findByIdAndDelete(id);
         if (!formasDePago) throw new NotFoundException('Formas de Pago not found');
         return formasDePago;
     }
 
    async findAll(formasDePagoDto: FormasDePagoDto): Promise<FormasDePago[]> {
        let exentos: FormasDePago[] = new Array<FormasDePago>;
        let result = await this.formasDePagoModel.find(formasDePagoDto).exec();
        result.forEach(formasDePago => {
            exentos.push(formasDePago);
        });
        return exentos;
    }
 
     async findOne(id: string): Promise<FormasDePago> {
         const isValid = Types.ObjectId.isValid(id);
         if (!isValid) throw new NotFoundException('Id Formas de Pago no válido');
         const formasDePago = await this.formasDePagoModel.findById(id);
         if (!formasDePago) throw new NotFoundException('Formas de Pago not found');
         return formasDePago;
     }

}
