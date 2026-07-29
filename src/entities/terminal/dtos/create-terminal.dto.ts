import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsNumber, IsEnum, IsDate } from 'class-validator';

import { EstadoTerminal } from './../enums/estado-terminal.enum';

export class CreateTerminalDto {
  @ApiProperty({ description: 'Código único de terminal', example: 403 })
  @IsNotEmpty({ message: 'El código es obligatorio.' })
  @IsNumber({}, { message: 'El código debe ser un número.' })
  codigo: number;

  @ApiProperty({
    description: 'Número de inventario de la terminal',
    required: true,
    example: 22,
  })
  @IsNotEmpty({ message: 'El número de inventario es obligatorio.' })
  @IsNumber({}, { message: 'El número de inventario debe ser numérico.' })
  numeroInventario: number;

  @ApiProperty({
    description: 'Indica el estado de la terminal',
    enum: EstadoTerminal,
    example: EstadoTerminal.ACTIVO,
  })
  @IsNotEmpty({ message: 'El estado es obligatorio.' })
  @IsEnum(EstadoTerminal, { message: 'El estado debe ser Activo, Inactivo o Roto.' })
  estado: EstadoTerminal;

  @ApiProperty({ description: 'Punto de venta 22' })
  @IsNotEmpty({ message: 'El punto de venta es obligatorio.' })
  @IsString({ message: 'El punto de venta debe ser un texto.' })
  puntoDeVenta: string;

  @ApiProperty({ description: 'Indica fecha y hora de última colecta', required: false })
  @IsOptional()
  @IsDate({ message: 'La fecha proporcionada no es válida.' })
  ultimaColecta?: Date;

  @ApiProperty({ description: 'Números de dias sin colectar', example: 7 })
  @IsNumber({}, { message: 'El número de dias sin colectar es un valor numérico' })
  @IsOptional()
  diasSinColectar?: number;

  @ApiProperty({ description: 'Código de acceso a la terminal', example: 145 })
  @IsNotEmpty({ message: 'Código de acceso a la terminal es obligatorio.' })
  @IsNumber({}, { message: 'El código de acceso a la terminal es un valor numérico' })
  codigoAcceso: number;

  @ApiProperty({ description: 'Detalles de la terminal' })
  @IsOptional()
  @IsString({ message: 'Los detalles de la terminal son en texto.' })
  detalles?: string;
}
