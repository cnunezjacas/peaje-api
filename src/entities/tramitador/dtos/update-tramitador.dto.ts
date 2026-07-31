import { PartialType } from '@nestjs/mapped-types';
import { CreateTramitadorDto } from './create-tramitador.dto';

export class UpdateTramitadorDto extends PartialType(CreateTramitadorDto) {}
