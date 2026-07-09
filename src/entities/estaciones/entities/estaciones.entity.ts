import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import { Cuenta } from './cuenta.entity';
import { Provincia } from 'src/manage/provincia/entities/provincia.entity';
import { Municipio } from 'src/manage/municipio/entities/municipio.entity';

@Schema()
export class Estaciones extends Document {
  @Prop({ required: true, unique: true })
  codigo: string;
  @Prop({ required: true })
  nombre: string;
  @Prop({ required: true })
  direccion: string;
  @Prop({ type: Types.ObjectId, ref: Provincia.name, required: true })
  provincia: Provincia | Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: Municipio.name, required: true })
  municipio: Municipio | Types.ObjectId;
  @Prop()
  telefonos: string[];
  @Prop({ required: true })
  nit: number;
  @Prop({ type: Types.ObjectId, ref: Cuenta.name, required: true })
  cuentaCuc: Cuenta | Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: Cuenta.name, required: true })
  cuentaCup: Cuenta | Types.ObjectId;
}

const EstacionesSchema = SchemaFactory.createForClass(Estaciones);
EstacionesSchema.plugin(uniqueValidator, { message: '{PATH} ya está en uso.' });
export { EstacionesSchema };
