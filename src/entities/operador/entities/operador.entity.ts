import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

import { RolOperador } from '../enums/rol-operador.enum';
import { EstadoOperador } from '../enums/estado-operador.enum';

@Schema({ timestamps: true })
export class Operador extends Document {
  @Prop({ required: true, unique: true })
  nombre: string;

  @Prop({ required: false })
  alias: string;

  @Prop({
    type: String,
    required: true,
    enum: Object.values(RolOperador),
    default: RolOperador.COBRADOR,
  })
  rol: RolOperador;

  @Prop({
    type: String,
    required: true,
    enum: Object.values(EstadoOperador),
    default: EstadoOperador.INACTIVO,
  })
  estado: EstadoOperador;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  codigo: string;

  @Prop({
    type: String,
    required: false,
  })
  detalles: string;
}

const OperadorSchema = SchemaFactory.createForClass(Operador);
OperadorSchema.plugin(uniqueValidator, { message: '{PATH} ya está en uso.' });

export { OperadorSchema };
