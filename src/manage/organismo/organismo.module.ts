import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { Organismo, OrganismoSchema } from './entities/organismo.entity';

// 2. Imports del Controller y Service
import { OrganismoController } from './controllers/organismo.controller';

import { OrganismoService } from './services/organismo.service';

// 3. Imports de la Interface y el Repository
import { ORGANISMO_REPOSITORY } from './interfaces/organismo-repository.interface';

import { OrganismoMongoRespository } from './repository/organismo-mongo.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Organismo.name,
        schema: OrganismoSchema,
      },
    ]),
  ],
  controllers: [OrganismoController],

  providers: [
    OrganismoService,
    {
      provide: ORGANISMO_REPOSITORY,
      useClass: OrganismoMongoRespository,
    },
  ],

  exports: [OrganismoService, ORGANISMO_REPOSITORY],
})
export class OrganismoModule {}
