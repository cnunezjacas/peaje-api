import { ApiProperty } from "@nestjs/swagger";
import { 
    IsNumber, 
    IsOptional, 
    IsString 
} from "class-validator";

export class UpdateProvinciaDto {
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    codigo: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    nombre: string;
}