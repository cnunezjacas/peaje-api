import { ApiProperty } from "@nestjs/swagger";
import { 
    IsNotEmpty, 
    IsNumber, 
    IsOptional, 
    IsString 
} from "class-validator";

export class CreateFormasDePagoDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    nomenclador: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    detalles: string;
}

export class FormasDePagoDto{
    @ApiProperty()
    @IsOptional()
    @IsString()
    descripcion: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    nomenclador: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    detalles: string;
}