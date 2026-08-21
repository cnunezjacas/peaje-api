import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMunicipioDto {
  @ApiProperty({ description: 'Código único del Municipio', example: 42 })
  @IsNumber({}, { message: 'El código debe ser un número.' })
  @IsNotEmpty({ message: 'El código es obligatorio.' })
  codigo: number;

  @ApiProperty({ description: 'Nombre del Municipio', example: 'Banes' })
  @IsString({ message: 'El nombre debe ser un texto.' })
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  nombre: string;

  @ApiProperty({ description: 'ID de la Provincia' })
  @IsNotEmpty({ message: 'El ID de Provincia es obligatorio.' })
  @IsMongoId({ message: 'El ID de Provincia debe ser un ObjectId válido.' })
  provincia: string;
}
