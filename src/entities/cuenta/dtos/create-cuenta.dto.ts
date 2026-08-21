import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

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