import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsNumber, IsBoolean, IsIP } from 'class-validator';

export class CreatePuntoDeVentaDto {
  @ApiProperty({ description: 'Código único del punto de venta', example: 101 })
  @IsNotEmpty({ message: 'El código es obligatorio.' })
  @IsNumber({}, { message: 'El código debe ser un número.' })
  codigo: number;

  @ApiProperty({
    description: 'Descripción adicional del punto de venta',
    required: false,
    example: 'Caseta principal norte',
  })
  @IsOptional()
  @IsString({ message: 'La descripción debe ser un texto.' })
  descripcion?: string;

  @ApiProperty({ description: 'Indica si posee cabina', example: true })
  @IsOptional()
  @IsBoolean({ message: 'El valor de cabina debe ser verdadero o falso.' })
  cabina?: boolean;

  @ApiProperty({ description: 'Dirección IP de la gaveta de dinero', example: '192.168.1.10' })
  @IsNotEmpty({ message: 'La IP de la gaveta es obligatoria.' })
  @IsString({ message: 'La IP de la gaveta debe ser un texto.' })
  @IsIP('4', { message: 'La IP de la gaveta debe ser una dirección IPv4 válida.' })
  ipGaveta: string;

  @ApiProperty({ description: 'Dirección IP de la barrera vehicular', example: '192.168.1.11' })
  @IsNotEmpty({ message: 'La IP de la barrera es obligatoria.' })
  @IsString({ message: 'La IP de la barrera debe ser un texto.' })
  @IsIP('4', { message: 'La IP de la barrera debe ser una dirección IPv4 válida.' })
  ipBarrera: string;

  @ApiProperty({
    description: 'Máximo de días permitidos sin colectar',
    example: 2,
    required: false,
  })
  @IsOptional()
  @IsNumber({}, { message: 'Los días sin colectar deben ser un número.' })
  maxDiasSinColectar?: number;

  @ApiProperty({ description: 'Duración máxima del turno en horas', example: 12, required: false })
  @IsOptional()
  @IsNumber({}, { message: 'La duración del turno debe ser un número.' })
  maxDuracionTurno?: number;
}
