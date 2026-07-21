import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { Exento, ExentoSchema } from './entities/exento.entity';

// 2. Imports del Controller y Service
import { ExentoController } from './controllers/exento.controller';

import { ExentoService } from './services/exento.service';

// 3. Imports de la Interface y el Repository
import { EXENTO_REPOSITORY } from './interfaces/exento-repository.interface';

import { ExentoMongoRespository } from './repository/exento-mongo.repository';

@Module({
  // A. Registramos el modelo en Mongoose (solo para este módulo)
  imports: [
    MongooseModule.forFeature([
      {
        name: Exento.name,
        schema: ExentoSchema,
      },
    ]),
  ],

  // B. Registramos el Controller
  controllers: [ExentoController],

  // C. Registramos el Service y el Repository (con su token)
  providers: [
    ExentoService,
    {
      provide: EXENTO_REPOSITORY,
      useClass: ExentoMongoRespository,
    },
  ],

  // D. (Opcional pero recomendado) Exportamos lo que otros módulos podrían necesitar
  exports: [ExentoService, EXENTO_REPOSITORY],
})
export class ExentoModule {}
