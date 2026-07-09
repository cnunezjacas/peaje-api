import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateTipoCuentaDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  codigo: string;
}

export class TipoCuentaDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  codigo: string;
}
