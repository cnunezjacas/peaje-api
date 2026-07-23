import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

@Schema({ timestamps: true })
export class PuntoDeVenta extends Document {
  @Prop({ required: true, unique: true })
  codigo: number;

  @Prop({ required: false, trim: true })
  descripcion: string;

  @Prop({ required: false, default: false })
  cabina: boolean;

  @Prop({ required: true, trim: true })
  ipGaveta: string;

  @Prop({ required: true, trim: true })
  ipBarrera: string;

  @Prop({ required: false, default: 2 })
  maxDiasSinColectar: number;

  @Prop({ required: false, default: 12 })
  maxDuracionTurno: number;
}

const PuntoDeVentaSchema = SchemaFactory.createForClass(PuntoDeVenta);
PuntoDeVentaSchema.plugin(uniqueValidator, { message: '{PATH} ya está en uso.' });

export { PuntoDeVentaSchema };
