import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsNumber, IsMongoId, IsArray } from 'class-validator';

export class CreateEstacionesDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  codigo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  direccion: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  readonly provincia: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  readonly municipio: string;

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  telefonos: string[];

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  nit: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  cuentaCuc: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  cuentaCup: string;
}

export class EstacionesDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  codigo?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  direccion?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsMongoId()
  readonly provincia?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsMongoId()
  readonly municipio?: string;

  @ApiProperty({ required: false })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  telefonos?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  nit?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsMongoId()
  cuentaCuc?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsMongoId()
  cuentaCup?: string;
}
