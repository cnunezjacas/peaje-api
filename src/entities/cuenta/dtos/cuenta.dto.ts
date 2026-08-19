import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCuentaDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  titular: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  numero: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsMongoId()
  readonly banco: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsMongoId()
  readonly tipo: string;
}

export class CuentaDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  titular?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  numero?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsMongoId()
  readonly banco?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsMongoId()
  readonly tipo?: string;
}
