import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

@Schema()
export class Organismo extends Document{
    @Prop({required: true, unique: true})
    nombre: string;
    @Prop({required: true})
    siglas: string;
}

const OrganismoSchema = SchemaFactory.createForClass(Organismo);
OrganismoSchema.plugin(uniqueValidator, {message: '{PATH} ya está en uso.'});
export {OrganismoSchema};