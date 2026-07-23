import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. Imports de la Entity y el Schema
import { PuntoDeVenta, PuntoDeVentaSchema } from './entities/punto-de-venta.entity';

// 2. Imports del Controller y Service
import { PuntoDeVentaController } from './controllers/punto-de-venta.controller';
import { PuntoDeVentaService } from './services/punto-de-venta.service';

// 3. Imports de la Interface y el Repository
import { PUNTO_DE_VENTA_REPOSITORY } from './interfaces/punto-de-venta-repository.interface';
import { PuntoDeVentaMongoRepository } from './repository/punto-de-venta-mongo.repository';

@Module({
  // A. Registramos el modelo en Mongoose (solo para este módulo)
  imports: [
    MongooseModule.forFeature([
      {
        name: PuntoDeVenta.name,
        schema: PuntoDeVentaSchema,
      },
    ]),
  ],
  // B. Registramos el Controller
  controllers: [PuntoDeVentaController],
  // C. Registramos el Service y el Repository (con su token)
  providers: [
    PuntoDeVentaService,
    {
      provide: PUNTO_DE_VENTA_REPOSITORY,
      useClass: PuntoDeVentaMongoRepository,
    },
  ],
  // D. (Opcional pero recomendado) Exportamos lo que otros módulos podrían necesitar
  exports: [PuntoDeVentaService, PUNTO_DE_VENTA_REPOSITORY],
})
export class PuntoDeVentaModule {}
