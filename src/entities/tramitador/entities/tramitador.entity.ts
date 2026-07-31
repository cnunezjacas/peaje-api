import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

//Enum
import { EstadoTramitador } from '../enums/estado-tramitador.enum';

//Others Entities
import { Cliente } from 'src/entities/cliente/entities/cliente.entity';

@Schema({ timestamps: true })
export class Tramitador extends Document {
  /*Nombre y Apellidos (permite insertar el texto)*/
  @Prop({
    type: String,
    required: true,
  })
  nombre: string;

  /*ID (permite insertar el carnet identidad de la persona)*/
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  carnetID: string;

  /*Correo*/
  @Prop({
    type: String,
    required: false,
    unique: true,
  })
  correo: string;

  /*Estado (Activo o Inactivo)*/
  @Prop({
    type: String,
    enum: Object.values(EstadoTramitador),
    required: true,
    default: EstadoTramitador.INACTIVO,
  })
  estado: EstadoTramitador;

  /*Cliente (permitir seleccionar el cliente que desea)*/
  @Prop({
    type: Types.ObjectId,
    ref: Cliente.name,
    required: true,
  })
  cliente: Cliente | Types.ObjectId;
}

const TramitadorSchema = SchemaFactory.createForClass(Tramitador);
TramitadorSchema.plugin(uniqueValidator, { message: '{PATH} ya está en uso.' });

export { TramitadorSchema };
