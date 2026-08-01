import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { Operador, OperadorSchema } from './entities/operador.entity';

// 2. Imports del Controller y Service
import { OperadorService } from './services/operador.service';
import { OperadorController } from './controllers/operador.controller';

// 3. Imports de la Interface y el Repository
import { OPERADOR_REPOSITORY } from './interfaces/operador-repository.interface';
import { OperadorMongoRepository } from './repository/operador-mongo.repository';

@Module({
  // A. Registramos el modelo en Mongoose (solo para este módulo)
  imports: [
    MongooseModule.forFeature([
      {
        name: Operador.name,
        schema: OperadorSchema,
      },
    ]),
  ],
  // B. Registramos el Controller
  controllers: [OperadorController],
  // C. Registramos el Service y el Repository (con su token)
  providers: [
    OperadorService,
    {
      provide: OPERADOR_REPOSITORY,
      useClass: OperadorMongoRepository,
    },
  ],
  // D. (Opcional pero recomendado) Exportamos lo que otros módulos podrían necesitar
  exports: [OperadorService, OPERADOR_REPOSITORY],
})
export class OperadorModule {}
