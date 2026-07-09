import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

@Schema()
export class FormasDePago extends Document {
  @Prop({ required: true })
  descripcion: string;
  @Prop({ requeride: true })
  nomenclador: number;
  @Prop()
  detalles: string;
}

const FormasDePagoSchema = SchemaFactory.createForClass(FormasDePago);
export { FormasDePagoSchema };
