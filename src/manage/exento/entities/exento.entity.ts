import { 
    Prop, 
    Schema, 
    SchemaFactory 
} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

@Schema()
export class Exento extends Document{
    @Prop({required: true, unique: true})
    nombre: string;
    @Prop({required: true})
    codigo: string;
    @Prop({requeride: true})
    nomenclador: number;
    @Prop({requeride: true})
    detalles: string;
}

const ExentoSchema = SchemaFactory.createForClass(Exento);
ExentoSchema.plugin(uniqueValidator, {message: '{PATH} ya está en uso.'});
export {ExentoSchema};