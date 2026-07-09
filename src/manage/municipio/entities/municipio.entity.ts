import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Provincia } from '../../provincia/entities/provincia.entity';

@Schema()
export class Municipio extends Document {
  @Prop({ required: true })
  codigo: number;
  @Prop({ required: true })
  nombre: string;
  @Prop({ type: Types.ObjectId, ref: Provincia.name, required: true })
  provincia: Provincia | Types.ObjectId;
}

export const MunicipioSchema = SchemaFactory.createForClass(Municipio);
