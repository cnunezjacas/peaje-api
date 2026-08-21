import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import { Banco } from 'src/manage/banco/entities/banco.entity';
import { TipoCuenta } from 'src/manage/banco/entities/tipo-cuenta.entity';

@Schema()
export class Cuenta extends Document {
  @Prop({ required: true })
  numero: string;

  @Prop({ required: true })
  titular: string;

  @Prop({ type: Types.ObjectId, ref: TipoCuenta.name, required: true })
  tipo: TipoCuenta | Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Banco.name, required: true })
  banco: Banco | Types.ObjectId;
}

const CuentaSchema = SchemaFactory.createForClass(Cuenta);

/**
 * Índice compuesto: garantiza unicidad de numero + banco
 * Permite el mismo número en bancos diferentes
 * Permite el mismo número en el mismo banco si el tipo es diferente
 */
CuentaSchema.index({ numero: 1, banco: 1 }, { unique: true });

// Validador personalizado para mensajes más claros
CuentaSchema.plugin(uniqueValidator, {
  message: 'Ya existe una cuenta con el número {VALUE} en este banco.',
});

export { CuentaSchema };
