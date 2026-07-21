import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { Banco, BancoSchema } from './entities/banco.entity';

// 2. Imports del Controller y Service
import { BancoService } from './services/banco.service';
import { BancoController } from './controllers/banco.controller';

// 3. Imports de la Interface y el Repository
import { BANCO_REPOSITORY } from './interfaces/banco-repository.interfaces';
import { BancoMongoRespository } from './repository/banco-mongo.repository';

@Module({
  // A. Registramos el modelo en Mongoose (solo para este módulo)
  imports: [
    MongooseModule.forFeature([
      {
        name: Banco.name,
        schema: BancoSchema,
      },
    ]),
  ],

  // B. Registramos el Controller
  controllers: [BancoController],

  // C. Registramos el Service y el Repository (con su token)
  providers: [
    BancoService,
    {
      provide: BANCO_REPOSITORY,
      useClass: BancoMongoRespository,
    },
  ],

  // D. (Opcional pero recomendado) Exportamos lo que otros módulos podrían necesitar
  exports: [BancoService, BANCO_REPOSITORY],
})
export class BancoModule {}
