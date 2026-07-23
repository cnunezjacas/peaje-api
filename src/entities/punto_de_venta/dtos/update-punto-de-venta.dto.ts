import { PartialType } from '@nestjs/swagger';
import { CreatePuntoDeVentaDto } from './create-punto-de-venta.dto';

export class UpdatePuntoDeVentaDto extends PartialType(CreatePuntoDeVentaDto) {
  // TODO: Solo si es necesario agregar algo específico para actualización.
}
