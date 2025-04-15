import { CreateProvinciaDto } from "../dtos/create-provincia.dto";
import { ProvinciaRepository } from "../interfaces/provincia-repository.interface";
import { ProvinciaModel } from "../schemas/provincia.schema";
import { Provincia } from '../entities/provincia.entity';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class MongoProvinciaRepository implements ProvinciaRepository{

    constructor(
        @InjectModel(Provincia.name)
        private readonly provinciaModel: ProvinciaModel
    ){}

    async createProvincia(createProvinciaDto: CreateProvinciaDto): Promise<Provincia> {

        const provincia = await new this.provinciaModel(createProvinciaDto).save();

        console.log('createProvinciaDto', createProvinciaDto);

        return provincia;
    }
}