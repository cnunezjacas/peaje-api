import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

// La clase representa el documento en MongoDB.
// Extiende de Document para que Mongoose sepa que es un documento de base de datos.
@Schema({ timestamps: true }) // timestamps: true agrega createdAt y updatedAt automáticamente
export class AreaDeTrabajo extends Document {
  @Prop({ required: true, unique: true, trim: true })
  codigo: string;
  @Prop({ required: true, trim: true })
  nombre: string;
  @Prop({ required: false })
  detalles?: string;
}

const AreaDeTrabajoSchema = SchemaFactory.createForClass(AreaDeTrabajo);
AreaDeTrabajoSchema.plugin(uniqueValidator, { message: '{PATH} ya está en uso.' });
export { AreaDeTrabajoSchema };
