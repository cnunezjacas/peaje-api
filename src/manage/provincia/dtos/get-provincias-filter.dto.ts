import { IsOptional, IsNumber, IsString } from 'class-validator';

export class GetProvinciasFilterDto {
  @IsOptional()
  @IsNumber()
  codigo: number;

  @IsOptional()
  @IsString()
  nombre: string;
}
