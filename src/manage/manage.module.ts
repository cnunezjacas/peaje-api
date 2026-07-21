import { Module } from '@nestjs/common';
import { ProvinciaModule } from './provincia/provincia.module';

/* ============================================== */
/* =============== MODEL OF MANAGE ============== */
/* ============================================== */
import { MunicipioModule } from './municipio/municipio.module';

import { OrganismoModule } from './organismo/organismo.module';

import { MonedaModule } from './moneda/moneda.module';

import { ComprobanteModule } from './comprobante/comprobante.module';

import { Forma_pagoModule } from './formas_pago/formas_pago.module';

import { BancoModule } from './banco/banco.module';

import { Tipo_cuentaModule } from './banco/tipo_cuenta.module';

import { ExentoModule } from './exento/exento.module';

import { VehiculoModule } from './vehiculo/vehiculo.module';

@Module({
  imports: [
    ProvinciaModule,
    MunicipioModule,
    OrganismoModule,
    MonedaModule,
    ComprobanteModule,
    Forma_pagoModule,
    BancoModule,
    Tipo_cuentaModule,
    ExentoModule,
    VehiculoModule,
    // ... etc
  ],
  controllers: [],
  providers: [],
})
export class ManageModule {}
