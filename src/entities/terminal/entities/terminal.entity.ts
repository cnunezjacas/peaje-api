import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

import { EstadoTerminal } from './../enums/estado-terminal.enum';

@Schema({ timestamps: true })
export class Terminal extends Document {
  @Prop({ required: true, unique: true })
  codigo: number;

  @Prop({ required: true, trim: true })
  numeroInventario: number;

  // Usamos el Enum para garantizar que solo se guarden los 3 estados válidos
  @Prop({
    type: String,
    enum: Object.values(EstadoTerminal),
    required: true,
    default: EstadoTerminal.ACTIVO,
  })
  estado: EstadoTerminal;

  @Prop({ required: true, trim: true })
  puntoDeVenta: string;

  // Date en JS/MongoDB ya incluye Fecha y Hora automáticamente (formato ISO)
  @Prop({ required: false })
  ultimaColecta: Date;

  @Prop({ required: false, default: 0 })
  diasSinColectar: number;

  @Prop({ required: true })
  codigoAcceso: number;

  @Prop({ required: false, trim: true })
  detalles: string;
}

const TerminalSchema = SchemaFactory.createForClass(Terminal);
TerminalSchema.plugin(uniqueValidator, { message: '{PATH} ya está en uso.' });

export { TerminalSchema };
