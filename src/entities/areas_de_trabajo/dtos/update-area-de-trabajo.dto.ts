import { PartialType } from '@nestjs/swagger';
import { CreateAreaDeTrabajoDto } from './create-area-de-trabajo.dto';

// PartialType toma todos los campos del CreateDto y los hace opcionales (@IsOptional)
// Esto es una mejor práctica de NestJS para no repetir código.
export class UpdateAreaDeTrabajoDto extends PartialType(CreateAreaDeTrabajoDto) {
  // TODO: Solo si es necesario agregar algo específico para actualización.
}
