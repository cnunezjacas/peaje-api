import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { Cuenta, CuentaSchema } from './entities/cuenta.entity';

// 2. Imports del Controller y Service
import { CuentaService } from './services/cuenta.service';
import { CuentaController } from './controllers/cuenta.controller';

// 3. Imports de la Interface y el Repository
import { CUENTA_REPOSITORY } from './interfaces/cuenta-repository.interfaces';
import { CuentaMongoRepository } from './repository/cuenta-mongo.repository';

@Module({
  // A. Registramos el modelo en Mongoose (solo para este módulo)
  imports: [
    MongooseModule.forFeature([
      {
        name: Cuenta.name,
        schema: CuentaSchema,
      },
    ]),
  ],

  // B. Registramos el Controller
  controllers: [CuentaController],

  // C. Registramos el Service y el Repository (con su token)
  providers: [
    CuentaService,
    {
      provide: CUENTA_REPOSITORY,
      useClass: CuentaMongoRepository,
    },
  ],

  // D. (Opcional pero recomendado) Exportamos lo que otros módulos podrían necesitar
  exports: [CuentaService, CUENTA_REPOSITORY],
})
export class CuentaModule {}
