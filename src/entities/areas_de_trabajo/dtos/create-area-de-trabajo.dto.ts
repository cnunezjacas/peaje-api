import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateAreaDeTrabajoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El codigo es obligatorio.' })
  @IsString({ message: 'El codigo debe ser un texto' })
  codigo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  @IsString({ message: 'El nombre debe ser un texto' })
  nombre: string;

  @ApiProperty({
    description: 'Detalles adicionales del área',
    required: false,
  })
  @IsString({ message: 'Los detalles deben ser un texto' })
  @IsOptional() // Permite que este campo no sea enviado en la petición
  detalles?: string;
}
