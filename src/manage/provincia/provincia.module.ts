import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { Provincia, ProvinciaSchema } from './entities/provincia.entity';

import { Municipio, MunicipioSchema } from './../municipio/entities/municipio.entity';

// 2. Imports del Controller y Service
import { ProvinciaController } from './controllers/provincia.controller';
import { ProvinciaService } from './services/provincia.service';

// 3. Imports de la Interface y el Repository
import { PROVINCIA_REPOSITORY } from './interfaces/provincia-repository.interface';
import { ProvinciaMongoRepository } from './repository/provincia-mongo.repository';

@Module({
  // A. Registramos el modelo en Mongoose (solo para este módulo)
  imports: [
    MongooseModule.forFeature([
      {
        name: Provincia.name,
        schema: ProvinciaSchema,
      },
      // Agregamos Municipio para que el Repository de Provincia pueda inyectarlo
      {
        name: Municipio.name,
        schema: MunicipioSchema,
      },
    ]),
  ],
  // B. Registramos el Controller
  controllers: [ProvinciaController],
  // C. Registramos el Service y el Repository (con su token)
  providers: [
    ProvinciaService,
    {
      provide: PROVINCIA_REPOSITORY,
      useClass: ProvinciaMongoRepository,
    },
  ],
  // D. (Opcional pero recomendado) Exportamos lo que otros módulos podrían necesitar
  exports: [ProvinciaService, PROVINCIA_REPOSITORY],
})
export class ProvinciaModule {}
