import { PartialType } from '@nestjs/mapped-types';
import { CreateTerminalDto } from './create-terminal.dto';

export class UpdateTerminalDto extends PartialType(CreateTerminalDto) {
  // TODO: Solo si es necesario agregar algo específico para actualización.
}
