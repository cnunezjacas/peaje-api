import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { Municipio, MunicipioSchema } from './entities/municipio.entity';

// 2. Imports del Controller y Service
import { MunicipioController } from './controllers/municipio.controller';

import { MunicipioService } from './services/municipio.service';

// 3. Imports de la Interface y el Repository
import { MUNICIPIO_REPOSITORY } from './interfaces/municipio-repository.interface';

import { MunicipioMongoRepository } from './repository/municipio-mongo.repository';

@Module({
  // A. Registramos el modelo en Mongoose (solo para este módulo)
  imports: [
    MongooseModule.forFeature([
      {
        name: Municipio.name,
        schema: MunicipioSchema,
      },
    ]),
  ],

  // B. Registramos el Controller
  controllers: [MunicipioController],

  // C. Registramos el Service y el Repository (con su token)
  providers: [
    MunicipioService,
    {
      provide: MUNICIPIO_REPOSITORY,
      useClass: MunicipioMongoRepository,
    },
  ],

  // D. (Opcional pero recomendado) Exportamos lo que otros módulos podrían necesitar
  exports: [MunicipioService, MUNICIPIO_REPOSITORY],
})
export class MunicipioModule {}
