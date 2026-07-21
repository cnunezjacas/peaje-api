import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { Comprobante, ComprobanteSchema } from './entities/comprobante.entity';

// 2. Imports del Controller y Service
import { ComprobanteService } from './services/comprobante.service';

import { ComprobanteController } from './controllers/comprobante.controller';

// 3. Imports de la Interface y el Repository

import { COMPROBANTE_REPOSITORY } from './interfaces/comprobante-repository.interface';

import { ComprobanteMongoRespository } from './repository/comprobante-mongo.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Comprobante.name,
        schema: ComprobanteSchema,
      },
    ]),
  ],
  controllers: [ComprobanteController],
  providers: [
    ComprobanteService,
    {
      provide: COMPROBANTE_REPOSITORY,
      useClass: ComprobanteMongoRespository,
    },
  ],

  exports: [ComprobanteService, COMPROBANTE_REPOSITORY],
})
export class ComprobanteModule {}
