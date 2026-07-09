import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Estaciones, EstacionesSchema } from './estaciones/entities/estaciones.entity';
import { CuentaController } from './estaciones/controllers/cuenta.controller';
import { EstacionesController } from './estaciones/controllers/estaciones.controller';
import { CuentaService } from './estaciones/services/cuenta.service';
import { Cuenta, CuentaSchema } from './estaciones/entities/cuenta.entity';
import { CUENTA_REPOSITORY } from './estaciones/interfaces/cuenta-repository.interfaces';
import { CuentaMongoRespository } from './estaciones/repository/cuenta-mongo.repository';
import { EstacionesService } from './estaciones/services/estaciones.service';
import { ESTACIONES_REPOSITORY } from './estaciones/interfaces/estaciones-repository.interfaces';
import { EstacionesMongoRespository } from './estaciones/repository/estaciones-mongo.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Cuenta.name,
        schema: CuentaSchema,
      },
      {
        name: Estaciones.name,
        schema: EstacionesSchema,
      },
    ]),
  ],
  controllers: [CuentaController, EstacionesController],
  providers: [
    CuentaService,
    {
      provide: CUENTA_REPOSITORY,
      useClass: CuentaMongoRespository,
    },
    EstacionesService,
    {
      provide: ESTACIONES_REPOSITORY,
      useClass: EstacionesMongoRespository,
    },
  ],
})
export class EntitiesModule {}
