import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { Estaciones, EstacionesSchema } from './entities/estaciones.entity';

// 2. Imports del Controller y Service
import { EstacionesController } from './controllers/estaciones.controller';

import { EstacionesService } from './services/estaciones.service';

// 3. Imports de la Interface y el Repository
import { ESTACIONES_REPOSITORY } from './interfaces/estaciones-repository.interfaces';

import { EstacionesMongoRespository } from './repository/estaciones-mongo.repository';

@Module({
  // A. Registramos el modelo en Mongoose (solo para este módulo)
  imports: [
    MongooseModule.forFeature([
      {
        name: Estaciones.name,
        schema: EstacionesSchema,
      },
    ]),
  ],

  // B. Registramos el Controller
  controllers: [EstacionesController],
  // C. Registramos el Service y el Repository (con su token)

  providers: [
    EstacionesService,
    {
      provide: ESTACIONES_REPOSITORY,
      useClass: EstacionesMongoRespository,
    },
  ],

  // D. (Opcional pero recomendado) Exportamos lo que otros módulos podrían necesitar
  exports: [EstacionesService, ESTACIONES_REPOSITORY],
})
export class EstacionesModule {}
