import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBancoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  codigo: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  detalles: string;
}

export class BancoDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  codigo?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  detalles?: string;
}
