import { Module } from '@nestjs/common';

import { EstacionesModule } from './estaciones/estaciones.module';

import { CuentaModule } from './estaciones/cuenta.module';

import { AreaDeTrabajoModule } from './areas_de_trabajo/area-de-trabajo.module';

@Module({
  imports: [EstacionesModule, CuentaModule, AreaDeTrabajoModule],
  controllers: [],
  providers: [],
})
export class EntitiesModule {}
