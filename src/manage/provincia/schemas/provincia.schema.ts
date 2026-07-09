import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';

@Schema()
class Provincia {
  @Prop({ required: true })
  codigo: number;
  @Prop({ required: true })
  nombre: string;
}

/*export const ProvinciaSchema = SchemaFactory.createForClass(Provincia);

export type ProvinciaDocument = Provincia & Document;

export type ProvinciaModel = Model<Provincia>;
*/
