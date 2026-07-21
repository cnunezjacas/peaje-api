import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { Moneda, MonedaSchema } from './entities/moneda.entity';

// 2. Imports del Controller y Service
import { MonedaController } from './controllers/moneda.controller';

import { MonedaService } from './services/moneda.service';

// 3. Imports de la Interface y el Repository
import { MONEDA_REPOSITORY } from './interfaces/moneda-repository.interface';

import { MonedaMongoRespository } from './repository/moneda-mongo.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Moneda.name,
        schema: MonedaSchema,
      },
    ]),
  ],
  controllers: [MonedaController],

  providers: [
    MonedaService,
    {
      provide: MONEDA_REPOSITORY,
      useClass: MonedaMongoRespository,
    },
  ],

  exports: [MonedaService, MONEDA_REPOSITORY],
})
export class MonedaModule {}
