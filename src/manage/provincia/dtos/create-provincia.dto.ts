import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProvinciaDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    codigo: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nombre: string;
}