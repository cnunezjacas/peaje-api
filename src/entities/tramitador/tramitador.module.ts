import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { Tramitador, TramitadorSchema } from './entities/tramitador.entity';

// 2. Imports del Controller y Service
import { TramitadorController } from './controllers/tramitador.controller';
import { TramitadorService } from './services/tramitador.service';

// 3. Imports de la Interface y el Repository
import { TRAMITADOR_REPOSITORY } from './interfaces/tramitador-repository.interface';
import { TramitadorMongoRepository } from './repository/tramitador-mongo.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Tramitador.name,
        schema: TramitadorSchema,
      },
    ]),
  ],
  controllers: [TramitadorController],
  providers: [
    TramitadorService,
    {
      provide: TRAMITADOR_REPOSITORY,
      useClass: TramitadorMongoRepository,
    },
  ],
  exports: [TramitadorService, TRAMITADOR_REPOSITORY],
})
export class TramitadorModule {}
