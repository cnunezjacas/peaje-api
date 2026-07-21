import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { FormasDePago, FormasDePagoSchema } from './entities/formas-pago.entity';

// 2. Imports del Controller y Service
import { FormasDePagoService } from './services/formas-pago.service';

import { FormasDePagoController } from './controllers/formas-pago.controller';

// 3. Imports de la Interface y el Repository
import { FORMAS_PAGO_REPOSITORY } from './interfaces/formas-pago-repository.interface';

import { FormasDePagoMongoRespository } from './repository/formas-pago--mongo.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FormasDePago.name,
        schema: FormasDePagoSchema,
      },
    ]),
  ],
  controllers: [FormasDePagoController],
  providers: [
    FormasDePagoService,
    {
      provide: FORMAS_PAGO_REPOSITORY,
      useClass: FormasDePagoMongoRespository,
    },
  ],

  exports: [FormasDePagoService, FORMAS_PAGO_REPOSITORY],
})
export class Forma_pagoModule {}
