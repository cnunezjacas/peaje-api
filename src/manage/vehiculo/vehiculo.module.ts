import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { Vehiculo, VehiculoSchema } from './entities/vehiculo.entity';

// 2. Imports del Controller y Service
import { VehiculoService } from './services/vehiculo.service';

import { VehiculoController } from './controllers/vehiculo.controller';

// 3. Imports de la Interface y el Repository
import { VEHICULO_REPOSITORY } from './interfaces/vehiculo-repository.interface';

import { VehiculoMongoRespository } from './repository/vehiculo-mongo.repository';

@Module({
  // A. Registramos el modelo en Mongoose (solo para este módulo)
  imports: [
    MongooseModule.forFeature([
      {
        name: Vehiculo.name,
        schema: VehiculoSchema,
      },
    ]),
  ],

  // B. Registramos el Controller
  controllers: [VehiculoController],

  // C. Registramos el Service y el Repository (con su token)
  providers: [
    VehiculoService,
    {
      provide: VEHICULO_REPOSITORY,
      useClass: VehiculoMongoRespository,
    },
  ],

  // D. (Opcional pero recomendado) Exportamos lo que otros módulos podrían necesitar
  exports: [VehiculoService, VEHICULO_REPOSITORY],
})
export class VehiculoModule {}
