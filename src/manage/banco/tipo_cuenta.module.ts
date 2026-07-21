import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { TipoCuenta, TipoCuentaSchema } from './entities/tipo-cuenta.entity';

// 2. Imports del Controller y Service
import { TipoCuentaController } from './controllers/tipo-cuenta.controller';
import { TipoCuentaService } from './services/tipo-cuenta.service';

// 3. Imports de la Interface y el Repository
import { TIPO_CUENTA_REPOSITORY } from './interfaces/tipo-cuenta-repository.interfaces';
import { TipoCuentaMongoRespository } from './repository/tipo-cuenta-mongo.repository';

@Module({
  // A. Registramos el modelo en Mongoose (solo para este módulo)
  imports: [
    MongooseModule.forFeature([
      {
        name: TipoCuenta.name,
        schema: TipoCuentaSchema,
      },
    ]),
  ],

  // B. Registramos el Controller
  controllers: [TipoCuentaController],

  // C. Registramos el Service y el Repository (con su token)
  providers: [
    TipoCuentaService,
    {
      provide: TIPO_CUENTA_REPOSITORY,
      useClass: TipoCuentaMongoRespository,
    },
  ],

  // D. (Opcional pero recomendado) Exportamos lo que otros módulos podrían necesitar
  exports: [TipoCuentaService, TIPO_CUENTA_REPOSITORY],
})
export class Tipo_cuentaModule {}
