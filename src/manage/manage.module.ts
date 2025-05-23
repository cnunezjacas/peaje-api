import { Module } from '@nestjs/common';
import { ProvinciaController } from './provincia/controllers/provincia.controller';
import { ProvinciaService } from './provincia/services/provincia.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Provincia,
  ProvinciaSchema
} from './provincia/entities/provincia.entity';
import { PROVINCIA_REPOSITORY } from './provincia/interfaces/provincia-repository.interface';
import { ProvinciaMongoRepository } from './provincia/repository/provincia-mongo.repository';
import { MunicipioService } from './municipio/services/municipio.service';
import { MunicipioController } from './municipio/controllers/municipio.controller';
import { MUNICIPIO_REPOSITORY } from './municipio/interfaces/municipio-repository.interface';
import { MunicipioMongoRepository } from './municipio/repository/municipio-mongo.repository';
import {
  Municipio,
  MunicipioSchema
} from './municipio/entities/municipio.entity';
import { OrganismoService } from './organismo/services/organismo.service';
import { OrganismoController } from './organismo/controllers/organismo.controller';
import { ORGANISMO_REPOSITORY } from './organismo/interfaces/organismo-repository.interface';
import { OrganismoMongoRespository } from './organismo/repository/organismo-mongo.repository';
import {
  Organismo,
  OrganismoSchema
} from './organismo/entities/organismo.entity';
import { BancoService } from './banco/services/banco.service';
import { BancoController } from './banco/controllers/banco.controller';
import {
  Banco,
  BancoSchema
} from './banco/entities/banco.entity';
import { BANCO_REPOSITORY } from './banco/interfaces/banco-repository.interfaces';
import { BancoMongoRespository } from './banco/respository/banco-mongo.repository';
import { MonedaService } from './moneda/services/moneda.service';
import { MonedaController } from './moneda/controllers/moneda.controller';
import { MONEDA_REPOSITORY } from './moneda/interfaces/moneda-repository.interface';
import { MonedaMongoRespository } from './moneda/repository/moneda-mongo.repositoy';
import { 
  Moneda, 
  MonedaSchema 
} from './moneda/entities/moneda.entity';
import { VehiculoService } from './vehiculo/services/vehiculo.service';
import { VehiculoController } from './vehiculo/controllers/vehiculo.controller';
import { 
  Vehiculo, 
  VehiculoSchema } from './vehiculo/entities/vehiculo.entity';
import { VEHICULO_REPOSITORY } from './vehiculo/interfaces/vehiculo-repository.interface';
import { VehiculoMongoRespository } from './vehiculo/repository/vehiculo-mongo.repository';
import { ExentoController } from './exento/controllers/exento.controller';
import { ExentoService } from './exento/services/exento.service';
import { 
  Exento, 
  ExentoSchema 
} from './exento/entities/exento.entity';
import { EXENTO_REPOSITORY } from './exento/interfaces/exento-repository.interface';
import { ExentoMongoRespository } from './exento/repository/exento-mongo.repository';
import { ComprobanteService } from './comprobante/services/comprobante.service';
import { ComprobanteController } from './comprobante/controllers/comprobante.controller';
import { 
  Comprobante, 
  ComprobanteSchema 
} from './comprobante/entities/comprobante.entity';
import { COMPROBANTE_REPOSITORY } from './comprobante/interfaces/comprobante-repository.interface';
import { ComprobanteMongoRespository } from './comprobante/repository/comprobante-mongo.repository';
import {
  FormasDePago,
  FormasDePagoSchema
} from './formas_pago/entities/formas-pago.entity';
import { FORMAS_PAGO_REPOSITORY } from './formas_pago/interfaces/formas-pago-repository.interface';
import { FormasDePagoMongoRespository } from './formas_pago/repository/formas-pago--mongo.repository';
import { FormasDePagoService } from './formas_pago/services/formas-pago.service';
import { FormasDePagoController } from './formas_pago/controllers/formas-pago.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Provincia.name,
        schema: ProvinciaSchema
      },
      {
        name: Municipio.name,
        schema: MunicipioSchema
      },
      {
        name: Organismo.name,
        schema: OrganismoSchema
      },
      {
        name: Banco.name,
        schema: BancoSchema
      },
      {
        name: Moneda.name,
        schema: MonedaSchema
      },
      {
        name: Vehiculo.name,
        schema: VehiculoSchema
      },
      {
        name: Exento.name,
        schema: ExentoSchema
      },
      {
        name: Comprobante.name,
        schema: ComprobanteSchema
      },
      {
        name: FormasDePago.name,
        schema: FormasDePagoSchema
      },
    ])
  ],
  controllers: [
    ProvinciaController,
    MunicipioController,
    OrganismoController,
    BancoController,
    MonedaController,
    VehiculoController,
    ExentoController,
    ComprobanteController,
    FormasDePagoController
  ],
  providers: [
    ProvinciaService,
    {
      provide: PROVINCIA_REPOSITORY,
      useClass: ProvinciaMongoRepository,
    },
    MunicipioService,
    {
      provide: MUNICIPIO_REPOSITORY,
      useClass: MunicipioMongoRepository,
    },
    OrganismoService,
    {
      provide: ORGANISMO_REPOSITORY,
      useClass: OrganismoMongoRespository
    },
    BancoService,
    {
      provide: BANCO_REPOSITORY,
      useClass: BancoMongoRespository
    },
    MonedaService,
    {
      provide: MONEDA_REPOSITORY,
      useClass: MonedaMongoRespository
    },
    VehiculoService,
    {
      provide: VEHICULO_REPOSITORY,
      useClass: VehiculoMongoRespository
    },
    ExentoService,
    {
      provide: EXENTO_REPOSITORY,
      useClass: ExentoMongoRespository
    },
    ComprobanteService,
    {
      provide: COMPROBANTE_REPOSITORY,
      useClass: ComprobanteMongoRespository
    },
    FormasDePagoService,
    {
      provide: FORMAS_PAGO_REPOSITORY,
      useClass: FormasDePagoMongoRespository
    }
  ],
})
export class ManageModule { }
