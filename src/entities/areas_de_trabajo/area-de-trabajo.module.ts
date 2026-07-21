import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { AreaDeTrabajo, AreaDeTrabajoSchema } from './entities/area-de-trabajo.entity';

// 2. Imports del Controller y Service
import { AreaDeTrabajoController } from './controllers/area-de-trabajo.controller';

import { AreaDeTrabajoService } from './services/area-de-trabajo.service';

// 3. Imports de la Interface y el Repository
import { AREA_DE_TRABAJO_REPOSITORY } from './interfaces/area-de-trabajo-repository.interface';
import { AreaDeTrabajoMongoRepository } from './repository/area-de-trabajo-mongo.repository';

@Module({
  // A. Registramos el modelo en Mongoose (solo para este módulo)
  imports: [
    MongooseModule.forFeature([
      {
        name: AreaDeTrabajo.name,
        schema: AreaDeTrabajoSchema,
      },
    ]),
  ],
  // B. Registramos el Controller
  controllers: [AreaDeTrabajoController],
  // C. Registramos el Service y el Repository (con su token)
  providers: [
    AreaDeTrabajoService,
    {
      provide: AREA_DE_TRABAJO_REPOSITORY,
      useClass: AreaDeTrabajoMongoRepository,
    },
  ],

  // D. (Opcional pero recomendado) Exportamos lo que otros módulos podrían necesitar
  exports: [AreaDeTrabajoService, AREA_DE_TRABAJO_REPOSITORY],
})
export class AreaDeTrabajoModule {}
