import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateVehiculoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  codigo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  tasa: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  nomenclador: number;
}

export class VehiculoDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  codigo: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  tasa: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  nomenclador: number;
}
