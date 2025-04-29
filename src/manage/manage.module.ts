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
      }
    ])
  ],
  controllers: [
    ProvinciaController, 
    MunicipioController
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
      useClass: MongoMunicipioRepository,
    }
  ],
})
export class ManageModule { }
