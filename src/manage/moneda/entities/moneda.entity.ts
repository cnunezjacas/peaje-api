import { 
    Prop, 
    Schema, 
    SchemaFactory 
} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

@Schema()
export class Moneda extends Document{
    @Prop({required: true, unique: true})
    nombre: string;
    @Prop({required: true})
    siglas: string;
    @Prop({required: true})
    nomenclador: number;
    @Prop({required: true})
    tasa: number;
    @Prop({required: true})
    condor: string;
    @Prop({required: true})
    moneda: string;
}

const MonedaSchema = SchemaFactory.createForClass(Moneda);
//TODO OrganismoSchema.plugin(uniqueValidator, {message: '{PATH} ya está en uso.'});
export {MonedaSchema};