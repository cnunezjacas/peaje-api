import { ApiProperty } from "@nestjs/swagger";
import { 
    IsMongoId,
    IsNotEmpty, 
    IsNumber, 
    IsOptional, 
    IsString 
} from "class-validator";

export class CreateComprobanteDto{
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
    valor: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsMongoId()
    moneda: string;
}

export class ComprobanteDto{
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
    valor: number;

    @ApiProperty()
    @IsOptional()
    @IsMongoId()
    moneda: string;
}