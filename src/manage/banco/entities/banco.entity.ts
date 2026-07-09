import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

@Schema()
export class Banco extends Document {
  @Prop({ required: true, unique: true })
  nombre: string;
  @Prop({ required: true })
  codigo: string;
  @Prop()
  detalles: string;
}

const BancoSchema = SchemaFactory.createForClass(Banco);
BancoSchema.plugin(uniqueValidator, { message: '{PATH} ya está en uso.' });
export { BancoSchema };
