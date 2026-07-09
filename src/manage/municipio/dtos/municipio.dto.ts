import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMunicipioDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  codigo: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  readonly provincia: string;
}

export class MunicipioDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  codigo: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  nombre: string;

  @ApiProperty()
  @IsOptional()
  @IsMongoId()
  readonly provincia: string;
}
