import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateOrganismoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  siglas: string;
}

export class OrganismoDto {
  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  siglas: string;
}
