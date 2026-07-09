import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import { Banco } from 'src/manage/banco/entities/banco.entity';
import { TipoCuenta } from 'src/manage/banco/entities/tipo-cuenta.entity';

@Schema()
export class Cuenta extends Document {
  @Prop({ required: true, unique: true })
  numero: string;
  @Prop({ required: true })
  titular: string;
  @Prop({ type: Types.ObjectId, ref: TipoCuenta.name, required: true })
  tipo: TipoCuenta | Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: Banco.name, required: true })
  banco: Banco | Types.ObjectId;
}

const CuentaSchema = SchemaFactory.createForClass(Cuenta);
CuentaSchema.plugin(uniqueValidator, { message: '{PATH} ya está en uso.' });
export { CuentaSchema };
