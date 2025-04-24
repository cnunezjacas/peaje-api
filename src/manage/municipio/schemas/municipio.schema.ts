import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model, Types } from 'mongoose';
import { ProvinciaModel } from '../../provincia/schemas/provincia.schema';

@Schema()
class Municipio {
    @Prop({ type: Types.ObjectId, ref: 'Provincia', required: true})
    provincia: Types.ObjectId;

}