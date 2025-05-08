import { ApiProperty } from "@nestjs/swagger";
import { 
    IsNotEmpty, 
    IsNumber, 
    IsOptional, 
    IsString 
} from "class-validator";

export class CreateMonedaDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    siglas: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    nomenclador: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    tasa: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    condor: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    moneda: string;
}

export class MonedaDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    nombre: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    siglas: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    nomenclador: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    tasa: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    condor: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    moneda: string;
}