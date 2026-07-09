import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

@Schema()
export class TipoCuenta extends Document {
  @Prop({ required: true, unique: true })
  nombre: string;
  @Prop({ required: true })
  codigo: string;
}

const TipoCuentaSchema = SchemaFactory.createForClass(TipoCuenta);
TipoCuentaSchema.plugin(uniqueValidator, { message: '{PATH} ya está en uso.' });
export { TipoCuentaSchema };
