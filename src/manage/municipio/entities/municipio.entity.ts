import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import { Provincia } from '../../provincia/entities/provincia.entity';

@Schema()
export class Municipio extends Document {
  @Prop({ required: true, unique: true })
  codigo: number;
  @Prop({ required: true })
  nombre: string;
  @Prop({ type: Types.ObjectId, ref: Provincia.name, required: true })
  provincia: Provincia | Types.ObjectId;
}

const MunicipioSchema = SchemaFactory.createForClass(Municipio);
MunicipioSchema.plugin(uniqueValidator, { message: '{PATH} ya está en uso.' });

export { MunicipioSchema };
