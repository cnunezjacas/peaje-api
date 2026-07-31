import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

//Enums
import { CategoriaCliente } from '../enums/categoria-cliente.enum';

//Others Entities
import { Estaciones } from 'src/entities/estaciones/entities/estaciones.entity';
import { Organismo } from 'src/manage/organismo/entities/organismo.entity';
import { Banco } from 'src/manage/banco/entities/banco.entity';
import { Cuenta } from 'src/entities/estaciones/entities/cuenta.entity';
import { Provincia } from 'src/manage/provincia/entities/provincia.entity';
import { Municipio } from 'src/manage/municipio/entities/municipio.entity';

@Schema({ timestamps: true })
export class Cliente extends Document {
  @Prop({
    type: String,
    required: true,
    enum: Object.values(CategoriaCliente),
    default: CategoriaCliente.EMPRESA,
  })
  categoria: CategoriaCliente;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  codigo: string;

  @Prop({
    type: String,
    required: true,
  })
  nombre: string;

  @Prop({
    type: String,
    required: false,
  })
  siglas: string;

  @Prop({
    type: Types.ObjectId,
    ref: Estaciones.name,
    required: true,
  })
  estacion: Estaciones | Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: Organismo.name,
    required: false,
  })
  organismo: Organismo | Types.ObjectId;

  @Prop({
    type: String,
    required: false,
  })
  idTributaria: string;

  @Prop({
    type: Types.ObjectId,
    ref: Cuenta.name,
    required: true,
  })
  cuentaCUC: Cuenta | Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: Banco.name,
    required: true,
  })
  bancoCuentaCUC: Banco | Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: Cuenta.name,
    required: true,
  })
  cuentaCUP: Cuenta | Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: Banco.name,
    required: true,
  })
  bancoCuentaCUP: Banco | Types.ObjectId;

  @Prop({
    type: String,
    required: false,
  })
  registroComercial: string;

  @Prop({
    type: String,
    required: false,
  })
  registroMercantil: string;

  @Prop({
    type: Array,
    required: false,
  })
  telefonos: Array<String>;

  @Prop({
    type: Types.ObjectId,
    ref: Provincia.name,
    required: false,
  })
  provincia: Provincia | Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: Municipio.name,
    required: false,
  })
  municipio: Municipio | Types.ObjectId;

  @Prop({
    type: String,
    required: true,
  })
  direccion: string;
}

const ClienteSchema = SchemaFactory.createForClass(Cliente);
ClienteSchema.plugin(uniqueValidator, { message: '{PATH} ya está en uso.' });

export { ClienteSchema };
