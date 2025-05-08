import { ApiProperty } from "@nestjs/swagger";
import { 
    IsNotEmpty, 
    IsOptional, 
    IsString 
} from "class-validator";

export class CreateBancoDto{
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
    @IsString()
    detalles: string;
}