import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

@Schema()
export class Vehiculo extends Document {
  @Prop({ required: true, unique: true })
  nombre: string;
  @Prop({ required: true })
  codigo: string;
  @Prop({ requeride: true })
  tasa: number;
  @Prop({ requeride: true })
  nomenclador: number;
}

const VehiculoSchema = SchemaFactory.createForClass(Vehiculo);
VehiculoSchema.plugin(uniqueValidator, { message: '{PATH} ya está en uso.' });
export { VehiculoSchema };
