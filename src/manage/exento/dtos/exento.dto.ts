import { ApiProperty } from "@nestjs/swagger";
import { 
    IsNotEmpty, 
    IsNumber, 
    IsOptional, 
    IsString 
} from "class-validator";

export class CreateExentoDto{
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
    nomenclador: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    detalles: string;
}

export class ExentoDto{
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
    nomenclador: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    detalles: string;
}