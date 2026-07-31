import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsEnum, IsEmail, IsMongoId } from 'class-validator';
import { EstadoTramitador } from '../enums/estado-tramitador.enum';

export class CreateTramitadorDto {
  /* =============================================================== */
  @ApiProperty({ description: 'Nombre y Apellidos', example: 'Juan Pérez' })
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  @IsString({ message: 'El nombre debe ser un texto.' })
  nombre: string;
  /* =============================================================== */

  @ApiProperty({ description: 'Carnet de Identidad', example: '90123112345' })
  @IsNotEmpty({ message: 'El Carnet de Identidad es obligatorio.' })
  @IsString({ message: 'El Carnet de Identidad debe ser un texto.' })
  carnetID: string;
  /* =============================================================== */

  @ApiProperty({ description: 'Correo electrónico', example: 'juan@ejemplo.com' })
  //@IsNotEmpty({ message: 'El correo es obligatorio.' })
  @IsOptional()
  @IsEmail({}, { message: 'El formato del correo no es válido.' })
  correo?: string;
  /* =============================================================== */

  @ApiProperty({ description: 'Estado', enum: EstadoTramitador, example: EstadoTramitador.ACTIVO })
  @IsNotEmpty({ message: 'El estado es obligatorio.' })
  @IsEnum(EstadoTramitador, { message: 'El estado debe ser Activo o Inactivo.' })
  estado: EstadoTramitador;
  /* =============================================================== */

  @ApiProperty({ description: 'ID del Cliente asociado' })
  @IsNotEmpty({ message: 'El Cliente es obligatorio.' })
  @IsMongoId({ message: 'El ID del Cliente debe ser un ObjectId válido.' })
  cliente: string;
  /* =============================================================== */
}
