import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsEnum } from 'class-validator';

import { EstadoOperador } from '../enums/estado-operador.enum';
import { RolOperador } from '../enums/rol-operador.enum';

export class CreateOperadorDto {
  @ApiProperty({
    description: 'Nombre del Operador',
    required: true,
    example: 'Martin Brizuela Lopez',
  })
  @IsNotEmpty({ message: 'El nombre del Operador es obligatorio.' })
  @IsString({ message: 'El nombre del Operador debe ser un texto' })
  nombre: string;

  @ApiProperty({
    description: 'Alias del Operador',
    required: false,
    example: 'mbrizlop29',
  })
  @IsOptional()
  alias: string;

  @ApiProperty({
    description: 'Rol del Operador',
    required: true,
    enum: RolOperador.COBRADOR,
    example: 'Cobrador',
  })
  @IsNotEmpty({ message: 'El rol es obligatorio.' })
  @IsEnum(RolOperador, { message: 'El rol debe ser Cobrador, Supervisor o Administrador.' })
  rol: RolOperador;

  @ApiProperty({
    description: 'Estado del Operador',
    required: true,
    example: 'Activo',
  })
  @IsNotEmpty({ message: 'El estado del Operador es obligatorio.' })
  @IsEnum(EstadoOperador, { message: 'El estado del Cobrador debe ser, Activo o Inactivo.' })
  estado: EstadoOperador;

  @ApiProperty({
    description: 'Código único de Operador',
    required: true,
    example: '7432',
  })
  @IsString({ message: 'El código del Operador debe ser un texto' })
  @IsNotEmpty({ message: 'El código del Operador es obligatorio.' })
  codigo: string;

  @ApiProperty({
    description: 'Detalle del Operador',
    example: 'Tarjetas asignadas',
  })
  @IsOptional()
  detalles: string;
}
