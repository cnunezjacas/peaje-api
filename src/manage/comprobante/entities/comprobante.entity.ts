import { 
    Prop, 
    Schema, 
    SchemaFactory 
} from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import { Moneda } from 'src/manage/moneda/entities/moneda.entity';

@Schema()
export class Comprobante extends Document{
    @Prop({required: true, unique: true})
    nombre: string;
    @Prop({required: true})
    codigo: string;
    @Prop({requeride: true})
    nomenclador: number;
    @Prop({requeride: true})
    valor: number;
    @Prop({ type: Types.ObjectId, ref: Moneda.name, required: true})
    moneda: Moneda | Types.ObjectId;
}

const ComprobanteSchema = SchemaFactory.createForClass(Comprobante);
ComprobanteSchema.plugin(uniqueValidator, {message: '{PATH} ya está en uso.'});
export {ComprobanteSchema};