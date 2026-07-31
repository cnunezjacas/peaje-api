import { Module } from '@nestjs/common';
import { PuntoDeVentaModule } from './punto_de_venta/punto-de-venta.module';
import { TerminalModule } from './terminal/terminal.module';
import { EstacionesModule } from './estaciones/estaciones.module';
import { CuentaModule } from './estaciones/cuenta.module';
import { AreaDeTrabajoModule } from './areas_de_trabajo/area-de-trabajo.module';
import { OperadorModule } from './operador/operador.module';
import { ClienteModule } from './cliente/cliente.module';
import { TramitadorModule } from './tramitador/tramitador.module';

@Module({
  imports: [ TramitadorModule,
    ClienteModule,
    OperadorModule,
    TerminalModule,
    PuntoDeVentaModule,
    EstacionesModule,
    CuentaModule,
    AreaDeTrabajoModule,
  ],
  controllers: [],
  providers: [],
})
export class EntitiesModule {}
