import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { Cliente, ClienteSchema } from './entities/cliente.entity';

// 2. Imports del Controller y Service
import { ClienteController } from './controllers/cliente.controller';
import { ClienteService } from './services/cliente.service';

// 3. Imports de la Interface y el Repository
import { CLIENTE_REPOSITORY } from './interfaces/cliente-repository.interface';
import { ClienteMongoRepository } from './repository/cliente-mongo.repository';

@Module({
  // A. Registramos el modelo en Mongoose (solo para este módulo)
  imports: [
    MongooseModule.forFeature([
      {
        name: Cliente.name,
        schema: ClienteSchema,
      },
    ]),
  ],
  // B. Registramos el Controller
  controllers: [ClienteController],
  // C. Registramos el Service y el Repository (con su token)
  providers: [
    ClienteService,
    {
      provide: CLIENTE_REPOSITORY,
      useClass: ClienteMongoRepository,
    },
  ],
  // D. (Opcional pero recomendado) Exportamos lo que otros módulos podrían necesitar
  exports: [ClienteService, CLIENTE_REPOSITORY],
})
export class ClienteModule {}
