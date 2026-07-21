import { Module } from '@nestjs/common';

import { EstacionesModule } from './estaciones/estaciones.module';

import { CuentaModule } from './estaciones/cuenta.module';

@Module({
  imports: [EstacionesModule, CuentaModule],
  controllers: [],
  providers: [],
})
export class EntitiesModule {}
